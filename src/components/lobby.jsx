import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SocketIO } from "boardgame.io/multiplayer";
import { Client } from "boardgame.io/react";

// Styles
import "./styles/lobby.css";

// API Helper
import { LobbyAPI } from "../api";

// Components
import { UdaipurGame } from "../game/game.js";
import UdaipurBoard from "./board";
import TemplatePage from "./templatePage";

// Constants
import { WEB_SERVER_URL, GAME_SERVER_URL, APP_PRODUCTION } from "../config.js";

const api = new LobbyAPI();
const server = APP_PRODUCTION
  ? `https://${window.location.hostname}`
  : GAME_SERVER_URL;
const GameClient = Client({
  game: UdaipurGame,
  board: UdaipurBoard,
  multiplayer: SocketIO({
    server: server,
  }),
});
class Lobby extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log("construct");
    this.state.id = props.match.params.id;
    this.state.joined = [];
    this.state.myID = null;
    this.state.userAuthToken = null;
  }
  componentDidMount() {
    this.checkRoomStateAndJoin();
    this.interval = setInterval(this.checkRoomState, 1000);
    window.addEventListener("beforeunload", this.cleanup.bind(this));
  }
  cleanup() {
    console.log("cleaning up");
    api.leaveRoom(this.state.id, this.state.myID, this.state.userAuthToken);
    clearInterval(this.interval);
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.cleanup.bind(this));
  }
  joinRoom = (player_no) => {
    const username = "Player " + player_no;
    if (this.state.id) {
      api.joinRoom(this.state.id, username, player_no).then(
        (authToken) => {
          console.log("Joined room as player ", player_no);
          this.setState({ myID: player_no, userAuthToken: authToken });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };
  checkRoomStateAndJoin = () => {
    console.log("pinging room endpoint to check whos there...");
    if (this.state.id) {
      api.whosInRoom(this.state.id).then(
        (players) => {
          const joinedPlayers = players.filter((p) => p.name);
          this.setState({
            joined: joinedPlayers,
          });
          const myPlayerNum = joinedPlayers.length;
          this.joinRoom(myPlayerNum);
        },
        (error) => {
          console.log("room does not exist");
          this.setState({
            id: null,
          });
        }
      );
    }
  };
  checkRoomState = () => {
    if (this.state.id) {
      api.whosInRoom(this.state.id).then(
        (players) => {
          const joinedPlayers = players.filter((p) => p.name);
          this.setState({
            joined: joinedPlayers,
          });
        },
        (error) => {
          console.log("room does not exist");
          this.setState({
            id: null,
          });
        }
      );
    }
  };
  getPlayerItem = (player) => {
    if (player) {
      if (player.id === this.state.myID) {
        return (
          <div>
            <div className="player-item">
              <a className="player-item-edit"> (Edit) </a>
              {player.name} - You
              <div className="player-ready"></div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div className="player-item">
              {player.name}
              <div className="player-ready"></div>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div>
          <div className="player-item loading">
            Waiting for player
            <div className="player-waiting"></div>
          </div>
        </div>
      );
    }
  };
  copyToClipboard = () => {
    var textField = document.createElement("textarea");
    textField.innerText = this.gameLinkBox.innerText;
    textField.style.opacity = "0";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    this.setState({ copied: true });
    setTimeout(
      function () {
        this.setState({ copied: false });
      }.bind(this),
      2000
    );
  };
  gameExistsView = () => {
    const players = [0, 1];
    const server = APP_PRODUCTION
      ? `https://${window.location.hostname}`
      : WEB_SERVER_URL;
    return (
      <>
        <div>Invite your friend by sending them the link below</div>
        <div className="game-link">
          <div
            className="game-link-box"
            ref={(gameLinkBox) => (this.gameLinkBox = gameLinkBox)}
          >
            {`${server}/lobby/${this.state.id}`}
          </div>
          <div className="game-link-button" onClick={this.copyToClipboard}>
            {this.state.copied ? "Copied️!" : " Copy "}
          </div>
        </div>
        <div>
          Game Code
          <br /> <div class="game-code">{this.state.id}</div>
        </div>
        <div className="player-list">
          {players.map((p) => {
            const joinedPlayer = this.state.joined[p];
            return this.getPlayerItem(joinedPlayer);
          })}
        </div>
        <div>
          <br />
          The game will begin once all the players join!
        </div>
      </>
    );
  };
  gameNotFoundView = () => {
    return (
      <>
        <div>
          Sorry! This game does not exist.
          <br />
          <Link to="/">Create a new one</Link>
        </div>
      </>
    );
  };
  getGameClient = () => {
    return (
      <GameClient
        gameID={this.state.id}
        playerID={String(this.state.myID)}
        credentials={this.state.userAuthToken}
      ></GameClient>
    );
  };
  render() {
    if (this.state.joined.length === 2) {
      return this.getGameClient();
    }
    return (
      <TemplatePage
        content={
          this.state.id ? this.gameExistsView() : this.gameNotFoundView()
        }
      />
    );
  }
}

export default Lobby;

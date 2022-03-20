import React from "react"
import { Link } from "react-router-dom"
import "./MatchSmallCard.scss"

export const MatchSmallCard = ({ match, teamName }) => {
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1
  const otherTeamRoute = `/teams/${otherTeam}`
  const isMatchWon = teamName === match.matchWinner ? true : false
  return (
    <div className={isMatchWon ? "MatchSmallCard won" : "MatchSmallCard lost"}>
      <span className="vs"> vs </span>
      <h1>
        <Link to={otherTeamRoute}> {otherTeam} </Link>
      </h1>
      <h3 className="match-result">
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </h3>
    </div>
  )
}

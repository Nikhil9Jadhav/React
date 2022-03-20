import { React, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MatchDetailCard } from "../components/MatchDetailCard"
import { MatchSmallCard } from "../components/MatchSmallCard"
import { PieChart } from "react-minimal-pie-chart"
import "./TeamPage.scss"

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] })

  const { teamName } = useParams()

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}`)
      const data = await response.json()
      setTeam(data)
    }
    fetchMatches()
  }, [teamName])

  //Handling passing wrong team name in api
  if (!team || !team.teamName) return <h1>Team not found</h1>

  //Handling latest match undefined nature at starting of page load
  const getLatestMatch = () => {
    return team.matches.length > 0 ? team.matches[0] : {}
  }

  return (
    <div className="TeamPage">
      <div className="section--team_name">
        <h1 className="team-name">{team.teamName}</h1>
      </div>

      <div className="section--win_loss">
        Win vs Loses
        <div className="pie-chart">
          <PieChart
            data={[
              { title: "Loses", value: team.totalMatches - team.totalWins, color: "#C13C37" },
              { title: "Wins", value: team.totalWins, color: "#0cca0c" }
            ]}
          />
        </div>
      </div>

      <div className="section--match_detail">
        <MatchDetailCard match={getLatestMatch()} teamName={team.teamName} />
      </div>

      {team.matches.slice(1).map(match => (
        <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />
      ))}

      <div className="more-info">
        <a href="#">
          <h3>{"More >"}</h3>
        </a>
      </div>
    </div>
  )
}

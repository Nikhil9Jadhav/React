import { React, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MatchDetailCard } from "../components/MatchDetailCard"
import { MatchSmallCard } from "../components/MatchSmallCard"

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
    <div>
      <h1>{team.teamName}</h1>

      <MatchDetailCard match={getLatestMatch()} teamName={team.teamName} />

      {team.matches.slice(1).map(match => (
        <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />
      ))}
    </div>
  )
}

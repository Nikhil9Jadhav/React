import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export const MatchPage = () => {
  const [matches, setMatches] = useState([])

  const { teamName, year } = useParams()

  useEffect(() => {
    const fetchMatchesByYear = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`)
      const matchesData = response.json()
      console.log(matchesData)
      setMatches(matchesData)
    }
    fetchMatchesByYear()
  }, [])

  return <div className="MatchPage">MatchPage</div>
}

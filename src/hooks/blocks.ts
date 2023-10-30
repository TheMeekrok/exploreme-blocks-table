import axios from "axios"
import { IBlock } from "../models/IBlock"
import { useEffect, useState } from "react"

const requestUrl = 'https://api.teritori.exploreme.pro/blocks?height=5831463'

export function useBlocks() {
  const [blocks, setBlocks] = useState<IBlock[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  async function getTableData() {
    setLoading(true)
    const response = await axios.get<IBlock[]>(requestUrl)
    setBlocks(response.data)
    setLoading(false)
  }

  useEffect(() => {
    getTableData()
  }, [])

  return { blocks, loading }
}
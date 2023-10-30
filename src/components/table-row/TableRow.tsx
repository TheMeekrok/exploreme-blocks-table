import moment from "moment"
import { IBlock } from "../../models/IBlock"
import './style.css'

const dateFormat = 'DD.MM.YYYY'
const timeFormat = 'hh:mm:ss'

interface TableRowProps {
  block: IBlock
  isOdd: boolean
}

export function TableRow({ block, isOdd }: TableRowProps) {
  const date = moment(block.time, moment.HTML5_FMT.DATETIME_LOCAL_MS).format(dateFormat)
  const time = moment(block.time, moment.HTML5_FMT.DATETIME_LOCAL_MS).format(timeFormat)

  function truncateHash(hash: string): string {
    if (hash.length < 20) { 
      return hash
    }

    const leftPart = hash.slice(0, 8)
    const rightPart = hash.slice(hash.length - 8, hash.length)

    return leftPart + '...' + rightPart
  }

  return (
    <tr className={ isOdd ? 'odd-row' : 'even-row' }>
      <td><a href="">{ block.height }</a></td>

      <td><a href="">{ truncateHash(block.hash) }</a></td>

      <td>
        <span className="proposer-cell">
          <img src={ block.proposer.avatar } alt={ block.proposer.moniker } />
          <a href="">{ block.proposer.moniker }</a>
        </span>
      </td>

      <td>{ block.txsCount }</td>

      <td>{ date }</td>

      <td>{ time }</td>
    </tr>
  )
}
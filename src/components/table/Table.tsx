import { useBlocks } from '../../hooks/blocks'
import { Loading } from '../loading/Loading'
import { TableRow } from '../table-row/TableRow'
import './style.css'

export function Table() {
  const { blocks, loading } = useBlocks()

  return (
    <div>
      <h3>BLOCKS</h3>
      <div className="table-holder">
        <div className='type-switch'>
          <div className='switch-option choosen-type'>Blocks</div>
          <div className='switch-option'>Transactions</div>
        </div>

        { loading && <Loading /> }

        { !loading && <table cellSpacing="0" cellPadding="0">
          <th>Height ▼</th>
          <th>Block Hash</th>
          <th>Proposer ▼</th>
          <th>Transactions ▼</th>
          <th>Date ▼</th>
          <th>Time ▼</th>

          { blocks.map((block, index) => 
            <TableRow 
              block={ block } 
              isOdd={ index % 2 === 0 } 
              key={ block.height } 
            /> 
          )}
        </table> }
      </div>
    </div>
  )
}
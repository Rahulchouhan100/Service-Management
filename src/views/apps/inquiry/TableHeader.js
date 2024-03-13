// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/router'
import { useContext } from 'react'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { AbilityContext } from 'src/layouts/components/acl/Can'

const TableHeader = props => {
  const router = useRouter()
  const { handleFilter, value } = props
  const ability = useContext(AbilityContext)

  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'end' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          sx={{ mr: 4, mb: 2 }}
          placeholder='Search Inquiry'
          onChange={e => handleFilter(e.target.value)}
        />
        {ability?.can('Create', 'Inquiry') ? (
          <Button sx={{ mb: 2 }} onClick={() => router.push('/apps/inquiry/addinquiry')} variant='contained'>
            Add Inquiry
          </Button>) : null}
      </Box>
    </Box>
  )
}

export default TableHeader

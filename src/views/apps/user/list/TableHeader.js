// ** MUI Imports
import { Autocomplete } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useContext } from 'react'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'
import { AbilityContext } from 'src/layouts/components/acl/Can'

const TableHeader = props => {
  // ** Props
  const { toggle } = props
  const ability = useContext(AbilityContext)

  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      {/* <Button
        sx={{ mr: 4, mb: 2 }}
        color='secondary'
        variant='outlined'
        startIcon={<Icon icon='mdi:export-variant' fontSize={20} />}
      >
        Export
      </Button> */}
      <div></div>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <Autocomplete
          sx={{ width: 250, mr: 4 }}
          options={top100Films}
          id='autocomplete-outlined'
          getOptionLabel={option => option.title || ''}
          renderInput={params => <TextField {...params} label='Combo box' />}
        />
        {ability?.can('Create', 'User') ? (
          <Button onClick={toggle} variant='contained'>
            Add User
          </Button>) : null}
      </Box>
    </Box>
  )
}

export default TableHeader

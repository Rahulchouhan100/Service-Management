// ** MUI Imports
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useContext } from 'react'
import { AbilityContext } from 'src/layouts/components/acl/Can'

const TableHeader = ({ setShow, setParentCategoryId }) => {
  const ability = useContext(AbilityContext)

  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant='h5'>Categories Details</Typography>
      {ability?.can('Create', 'Category') ? (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button sx={{ mb: 2 }} onClick={() => {
            setParentCategoryId("root")
            setShow(true)
          }} variant='contained'>
            Add Category
          </Button>
        </Box>) : null}
    </Box>
  )
}

export default TableHeader

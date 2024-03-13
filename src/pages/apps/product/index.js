// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Demo Components Imports
import Table from 'src/views/apps/product/Table'
import { CardHeader, Divider } from '@mui/material'
import axios from 'axios'
import AddProduct from 'src/views/apps/product/AddProduct'
import ViewProduct from 'src/views/apps/product/ViewProduct'
import DeleteProduct from 'src/views/apps/product/DeleteProduct'

const Product = ({ apiData }) => {
  // ** States
  const [show, setShow] = useState(false)
  const [showProductDetails, setShowProductDetails] = useState(false)
  const [deleteProduct, setDeleteProduct] = useState(false)
  const [defaultData, setDefaultData] = useState()

  return (
    <Grid container spacing={6}>
      <PageHeader
        title={<Typography variant='h5'>Product Details</Typography>}
      />
      <Grid item xs={12}>
        {apiData && (
          <Grid container spacing={6}>
            {apiData.statsHorizontal.map((item, index) => {
              return (
                <Grid item xs={12} md={3} sm={6} key={index}>
                  <CardStatisticsHorizontal {...item} icon={<Icon icon={item.icon} />} />
                </Grid>
              )
            })}
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Search Filters' />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item sm={4} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='role-select'>Select Category</InputLabel>
                  <Select
                    fullWidth
                    id='select-role'
                    label='Select Role'
                    labelId='role-select'
                    inputProps={{ placeholder: 'Select Role' }}
                  >
                    <MenuItem value=''>Select Role</MenuItem>
                    <MenuItem value='admin'>Electronic</MenuItem>
                    <MenuItem value='author'>A/c</MenuItem>
                    <MenuItem value='editor'>Mobile</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* <Grid item sm={4} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='plan-select'>Select Plan</InputLabel>
                  <Select
                    fullWidth
                    value={plan}
                    id='select-plan'
                    label='Select Plan'
                    labelId='plan-select'
                    onChange={handlePlanChange}
                    inputProps={{ placeholder: 'Select Plan' }}
                  >
                    <MenuItem value=''>Select Plan</MenuItem>
                    <MenuItem value='basic'>Basic</MenuItem>
                    <MenuItem value='company'>Company</MenuItem>
                    <MenuItem value='enterprise'>Enterprise</MenuItem>
                    <MenuItem value='team'>Team</MenuItem>
                  </Select>
                </FormControl>
              </Grid> */}
              <Grid item sm={4} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='status-select'>Select Status</InputLabel>
                  <Select
                    fullWidth
                    id='select-status'
                    label='Select Status'
                    labelId='status-select'
                    inputProps={{ placeholder: 'Select Role' }}
                  >
                    <MenuItem value=''>Select Role</MenuItem>
                    <MenuItem value='pending'>Pending</MenuItem>
                    <MenuItem value='active'>Active</MenuItem>
                    <MenuItem value='inactive'>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Grid item xs={12}>
            <Table setDeleteProduct={setDeleteProduct} deleteProduct={deleteProduct} setShow={setShow} show={show} setShowProductDetails={setShowProductDetails} showProductDetails={showProductDetails} defaultData={defaultData} setDefaultData={setDefaultData} />
          </Grid>

        </Card>
      </Grid>
      <DeleteProduct defaultData={defaultData} open={deleteProduct} setOpen={setDeleteProduct} />
      <ViewProduct defaultData={defaultData} show={showProductDetails} setShow={setShowProductDetails} />
      <AddProduct defaultData={defaultData} show={show} setShow={setShow} />
    </Grid>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData = res.data

  return {
    props: {
      apiData
    }
  }
}

Product.acl = {
  action: 'Read',
  subject: 'Product'
}

export default Product

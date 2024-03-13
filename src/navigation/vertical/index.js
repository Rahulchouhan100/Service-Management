const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: 'mdi:account-outline',
      path: '/apps/dashboard',
      action: 'Read',
      subject: 'dashboard'
    },
    {
      title: 'User',
      icon: 'mdi:account-outline',
      path: '/apps/user/list',
      action: 'Read',
      subject: 'User'
    },
    {
      title: 'Roles',
      icon: 'mdi:shield-outline',
      path: '/apps/roles',
      action: 'Read',
      subject: 'Role'
    },
    {
      title: 'Pages',
      icon: 'mdi:shield-outline',
      path: '/apps/pages',
      action: 'Read',
      subject: 'Pages'
    },
    {
      title: 'Roles & Permission',
      icon: 'mdi:shield-outline',
      path: '/apps/rolepages',
      action: 'Read',
      subject: 'RoleWise'
    },
    {
      title: 'Category',
      icon: 'mdi:shield-outline',
      path: '/apps/category',
      action: 'Read',
      subject: 'Category'
    },
    {
      title: 'Company',
      icon: 'mdi:shield-outline',
      path: '/apps/company',
      action: 'Read',
      subject: 'Company'
    },
    {
      title: 'Products',
      icon: 'mdi:shield-outline',
      path: '/apps/product',
      action: 'Read',
      subject: 'Product'
    },
    {
      title: 'GST',
      icon: 'mdi:shield-outline',
      path: '/apps/gst',
      action: 'Read',
      subject: 'GST'
    },
    {
      title: 'Quotation',
      icon: 'mdi:shield-outline',
      path: '/apps/quotation',
      action: 'Read',
      subject: 'Quotation'
    },
    {
      title: 'Complain',
      icon: 'mdi:shield-outline',
      path: '/apps/complain',
      action: 'Read',
      subject: 'Complain'
    },
    {
      title: 'Inquiry',
      icon: 'mdi:shield-outline',
      path: '/apps/inquiry',
      action: 'Read',
      subject: 'Inquiry'
    },
    {
      title: 'Term & Condition',
      icon: 'mdi:shield-outline',
      path: '/apps/termcondition',
      action: 'Read',
      subject: 'TermCondition'
    },
  ]
}

export default navigation

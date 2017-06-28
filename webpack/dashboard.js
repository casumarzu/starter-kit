import Dashboard from 'webpack-dashboard'
import DashboardPlugin from 'webpack-dashboard/plugin'

const dashboard = new Dashboard()
compiler.apply(new DashboardPlugin(dashboard.setData))

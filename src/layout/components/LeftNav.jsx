import React, { useEffect, useState } from 'react'
import {
  HomeOutlined,
	TableOutlined,
	PieChartOutlined,
	FileTextOutlined,
	AreaChartOutlined,
	FundOutlined,
	ShoppingOutlined,
	AppstoreOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

const { Sider } = Layout;
// 模拟数组结构
const menuList = [
  {
    label: "首页",
    key: "/home",
    icon: <HomeOutlined />
  },
  {
    label: "数据大屏",
    key: "/dataScreen",
    icon: <AreaChartOutlined />
  },
  {
    label: "超级表格",
    key: "/proTable",
    icon: <TableOutlined />,
    children: [
      {
        label: "使用Tabble",
        key: "/tabble/basic",
        icon: <AppstoreOutlined />
      },
      {
        label: "使用TabblePage",
        key: "/tabble/Page",
        icon: <AppstoreOutlined />
      }
    ]
  },
  {
    label: "Dashboard",
    key: "/dashboard",
    icon: <FundOutlined />,
    children: [
      {
        key: "/dashboard/dataVisualize",
        label: "数据可视化",
        icon: <AppstoreOutlined />
      },
      {
        key: "/dashboard/embedded",
        label: "内嵌页面",
        icon: <AppstoreOutlined />
      }
    ]
  },
  {
    label: "表单 Form",
    key: "/form",
    icon: <FileTextOutlined />,
    children: [
      {
        key: "/form/basicForm",
        label: "基础 Form",
        icon: <AppstoreOutlined />
      },
      {
        key: "/form/validateForm",
        label: "校验 Form",
        icon: <AppstoreOutlined />
      },
      {
        key: "/form/dynamicForm",
        label: "动态 Form",
        icon: <AppstoreOutlined />
      }
    ]
  },
  {
    label: "Echarts",
    key: "/echarts",
    icon: <PieChartOutlined />,
    children: [
      {
        key: "/echarts/waterChart",
        label: "水型图",
        icon: <AppstoreOutlined />
      },
      {
        key: "/echarts/columnChart",
        label: "柱状图",
        icon: <AppstoreOutlined />
      },
      {
        key: "/echarts/lineChart",
        label: "折线图",
        icon: <AppstoreOutlined />
      },
      {
        key: "/echarts/pieChart",
        label: "饼图",
        icon: <AppstoreOutlined />
      },
      {
        key: "/echarts/radarChart",
        label: "雷达图",
        icon: <AppstoreOutlined />
      },
      {
        key: "/echarts/nestedChart",
        label: "嵌套环形图",
        icon: <AppstoreOutlined />
      }
    ]
  },
  {
    label: "常用组件",
    key: "/assembly",
    icon: <ShoppingOutlined />,
    children: [
      {
        key: "/assembly/selectIcon",
        label: "Icon 选择",
        icon: <AppstoreOutlined />
      },
      {
        key: "/assembly/batchImport",
        label: "批量导入数据",
        icon: <AppstoreOutlined />
      }
    ]
  }
]
const rootSubmenuKeys = menuList.map(item => item.key)

export default function LeftNav(props) {
  const Location = useLocation()
  const navigate = useNavigate()
  const whd = (e) => {
    navigate(e.key)
  }
  const [openKeys, setOpenKeys] = useState(['/home']);
  const [selectedKeys, setselectedKeys] = useState([Location.pathname])
  const onOpenChange = (Keys) => {
    const latestOpenKey = Keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(Keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  }
  useEffect(() => {
    setselectedKeys([Location.pathname])
  }, [Location.pathname])
  return (
    <Sider trigger={null} collapsible collapsed={props.zdstate}>
      <div className="logo"><i></i><span style={{ 'display': props.zdstate ? 'none' : '' }}>React Admin</span></div>
      <Menu
        theme="dark" 
        mode="inline"
        defaultSelectedKeys={[Location.pathname]}
        items={menuList}
        onClick={whd}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
      />
    </Sider>
  )
}

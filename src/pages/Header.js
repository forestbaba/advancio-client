import React, {useState, useEffect} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/User/action'


const { Header, Content, Sider } = Layout;

const HeaderLayout = ({ isAuthenticated }) => {

    let dispatcher = useDispatch()
let history  = useHistory()

    const [active, setActive] = useState(1)
    const pathname = window.location.pathname;

    const path = pathname === '/' ? '1' : pathname.substr(1)
    useEffect(() => {
    

        if (!isAuthenticated) {
            history.push('/')
        }
    }, [isAuthenticated])

    const handleLogout = () => {
        
        dispatcher(logOut())
          

    }
    
    return (
        <Header className="header">
            {
                isAuthenticated && isAuthenticated ? (
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[active]}>

                        <Menu.Item key="1"> <Link to='/'>Home</Link></Menu.Item>
                        <Menu.Item key="2" onClick={handleLogout}> Log out</Menu.Item>
                    </Menu>
                ) : (
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[active]}>

                            <Menu.Item key="2"> <Link to='/login'>Login</Link></Menu.Item>
                            <Menu.Item key="3" to='/register'><Link to='/register'>Register</Link></Menu.Item>
                        </Menu>
                )
            }
           
        </Header>
    )
}
export default HeaderLayout;
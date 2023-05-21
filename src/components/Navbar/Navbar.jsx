import "./Navbar.css";
import logo from "../../assets/images/Home-image/logo.png";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from 'react-icons/ri';
import cnLang from '../../assets/images/Home-image/zh-CN.png'
import engLang from '../../assets/images/Home-image/en.png'
import ruLang from '../../assets/images/Home-image/ru.png'

const Navbar = () => {
     return (
          <nav className="navbar">
               <div className="navbar-element">
                    <div className="element-container">
                         <div className="element-wrap">
                              <div className="logo">
                                   <Link to={'/'}>
                                        <img src={logo} alt="Logo" />
                                   </Link>
                              </div>

                              <div className="nav-link-box">
                                   <ul className="nav-menu">
                                        <li className="nav-link">
                                             <Link to={"/"}>Главная</Link>
                                        </li>
                                        <li className="nav-link dropdown-box">
                                             <Link to={"/"}>Студия  <RiArrowDropDownLine className="dropdown-icon" /></Link>
                                             
                                             <ul className="dropdown-menu">
                                                  <li className="dropdown-link">
                                                       <Link to={"/"}>Алгоритм работы</Link>
                                                  </li>
                                             </ul>
                                        </li>
                                        <li className="nav-link dropdown-box">
                                             <Link to={"/"}>Услуги <RiArrowDropDownLine className="dropdown-icon" /></Link>
                                             
                                             <ul className="dropdown-menu">
                                                  <li className="dropdown-link">
                                                       <Link to={"/"}>Сайты</Link>
                                                  </li>
                                                  <li className="dropdown-link">
                                                       <Link to={"/"}>Приложения</Link>
                                                  </li>
                                                  <li className="dropdown-link">
                                                       <Link to={"/"}>Продвижение</Link>
                                                  </li>
                                                  <li className="dropdown-link">
                                                       <Link to={"/"}>Искусственный интеллект</Link>
                                                  </li>
                                                  <li className="dropdown-link">
                                                       <Link to={"/"}>Финтеч</Link>
                                                  </li>
                                             </ul>
                                        </li>
                                        <li className="nav-link">
                                             <Link to={"/"}>Блог</Link>
                                        </li>
                                        <li className="nav-link">
                                             <Link to={"/"}>Вакансии</Link>
                                        </li>
                                   </ul>
                              </div>

                              <div className="language">
                                   <div className="box">
                                        <img src={cnLang} alt="" />
                                   </div>
                                   <div className="box">
                                        <img src={engLang} alt="" />
                                   </div>
                                   <div className="box">
                                        <img src={ruLang} alt="" />
                                   </div>
                              </div>

                              <div className="contact">
                                   <div className="contact-btn">
                                        <Link to={"/"}>Контакты</Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;

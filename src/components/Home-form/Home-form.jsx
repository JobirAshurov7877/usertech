import "./Home-form.css";
import phone from "../../assets/images/Home-image/phone.gif";

const HomeForm = () => {
     return (
          <div className="home-form">
               <div className="home-form-element">
                    <div className="form-wrapper">
                         <div className="form-box_l">
                              <div className="form-title">
                                   <h3>Оставьте заявку на проект</h3>
                              </div>
                              <div className="form-card-body">
                                   <form action="">
                                        <div className="input-box">
                                             <input type="text" required placeholder="ФИО" />
                                             <input type="text" required placeholder="Телефон" />
                                        </div>
                                        <div className="form-btn">
                                             <input type="submit" value="Отправить заявку на проект" />
                                        </div>
                                        <div className="description">
                                             <p>*отправляя формы на данном сайте, вы даете согласие на обработку персональных данных</p>
                                        </div>
                                   </form>
                              </div>
                         </div>
                         <div className="form-box_r">
                              <img src={phone} alt="phone-img" />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default HomeForm;

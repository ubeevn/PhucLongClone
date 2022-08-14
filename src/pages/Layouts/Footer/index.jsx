import { info } from "./data";
import ButtonCustom from "../../../components/ButtonComponent";
import { Link } from "react-router-dom";
import ButtonComponent from "../../../components/ButtonComponent";
import accuracyImg from "./images/accuracy.png";
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";
import BackToTop from "../../../components/BackToTop";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 py-8 px-28 relative">
        <div>
          {info.map((item, index) => {
            return (
              <p>
                <label className="font-bold">{item.label} </label>
                {item.description}
              </p>
            );
          })}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <span className="font-bold">Đăng ký nhận tin khuyến mãi</span>
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="Nhập địa chỉ email"
                className="py-1 px-4 border text-black border-green-700 outline-none rounded-md"
              />
              <ButtonCustom
                name="GỬI"
                className="uppercase text-green-700 rounded-md border-green-700 border py-1 px-3"
              />
            </div>
            <ul>
              <li>
                <Link to="/chinh-sach-dat-hang">Chính sách đặt hàng</Link>
              </li>
              <li>
                <Link to="/chinh-sach-bao-mat-thong-tin">Chính sách bảo mật thông tin</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 items-end">
            <div className="flex items-center">
              <ButtonComponent
                className="border-r-2 border-green-700 pr-2 text-green-700"
                name="VN"
              />
              <ButtonComponent className="pl-2" name="EN" />
            </div>
            <Link to='/'>
                <img className="w-[200px]" src={accuracyImg} alt="" />
            </Link>
            <div className="flex gap-4">
              <Link to="/phuclongcoffeeendtea">
                <FacebookOutlined className="hover:opacity-60" style={{fontSize: '20px'}}/>
              </Link>
              <Link to="/phuclongcoffeeendtea">
                <TwitterOutlined className="hover:opacity-60" style={{fontSize: '20px'}}/>
              </Link>
              <Link to="/phuclongcoffeeendtea">
                <InstagramOutlined className="hover:opacity-60" style={{fontSize: '20px'}}/>
              </Link>
              <Link to="/phuclongcoffeeendtea">
                <YoutubeOutlined className="hover:opacity-60" style={{fontSize: '20px'}}/>
              </Link>
            </div>
          </div>
        </div>
        <BackToTop/>
      </div>
      <div className="bg-black flex justify-center py-1">
        <span className="text-gray-400">
          © 2017 Bản quyền Phuc Long Co., Ltd
        </span>
      </div>
    </>
  );
}

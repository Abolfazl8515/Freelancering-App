import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import useDevice from "../../hooks/useDevice";
import { useState } from "react";
import MobileHeader from "../../ui/MobileHeader";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const AdminLayout = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const { isMobileDevice } = useDevice("(max-width: 1024px)");

  if (!isMobileDevice)
    return (
      <AppLayout>
        <Sidebar>
          <CustomNavLink to="dashboard">
            <HiHome />
            <span>خانه</span>
          </CustomNavLink>
          <CustomNavLink to="projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
          <CustomNavLink to="proposals">
            <HiCollection />
            <span>درخواست ها</span>
          </CustomNavLink>
          <CustomNavLink to="users">
            <HiCollection />
            <span>کاربران</span>
          </CustomNavLink>
        </Sidebar>
      </AppLayout>
    );
  return (
    <AppLayout>
      <MobileHeader
        isShowMobileMenu={isShowMobileMenu}
        setIsShowMobileMenu={setIsShowMobileMenu}
      >
        <Sidebar>
          <CustomNavLink to="dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomNavLink>
          <CustomNavLink to="projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
          <CustomNavLink to="proposals">
            <HiCollection />
            <span>درخواست ها</span>
          </CustomNavLink>
          <CustomNavLink to="users">
            <HiCollection />
            <span>کاربران</span>
          </CustomNavLink>
        </Sidebar>
      </MobileHeader>
    </AppLayout>
  );
};

export default AdminLayout;

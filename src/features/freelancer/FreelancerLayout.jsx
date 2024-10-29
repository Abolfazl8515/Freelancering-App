import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import useDevice from "../../hooks/useDevice";
import MobileHeader from "../../ui/MobileHeader";
import { useState } from "react";

const FreelancerLayout = () => {
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
          <CustomNavLink to="profile">
            <HiCollection />
            <span>حساب کاربری</span>
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
          <CustomNavLink to="profile">
            <HiCollection />
            <span>حساب کاربری</span>
          </CustomNavLink>
        </Sidebar>
      </MobileHeader>
    </AppLayout>
  );
};

export default FreelancerLayout;

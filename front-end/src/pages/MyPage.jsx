import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import "../image/제작자 이미지.jpg"
import "../styles/MyPage.css"
import { useNavigate } from 'react-router-dom'

const MyPage = () => {
    const name="김멋사"
    const email="likelion@kakao.com"
    const navigate = useNavigate();

    return (
        <div className="MyPage">
            <Header
                title='마이페이지'
                leftChild={
                    <CustomButton
                        onClick={() => navigate(-1)}
                        text={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="20"
                                viewBox="0 0 13 24"
                                fill="none"
                            >
                                <path
                                    d="M10.752 23.994L0.87897 14.121C0.316556 13.5584 0.000610352 12.7955 0.000610352 12C0.000610352 11.2045 0.316556 10.4415 0.87897 9.87896L10.746 0.0119629L12.16 1.42596L2.29297 11.293C2.1055 11.4805 2.00018 11.7348 2.00018 12C2.00018 12.2651 2.1055 12.5194 2.29297 12.707L12.166 22.58L10.752 23.994Z"
                                    fill="black"
                                />
                            </svg>
                        }
                    />
                }
            />
            
            <div className="profile">
                <svg className="myimg" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3984 52.6456C16.0459 48.764 19.8926 46.0416 24.3751 46.0416H40.6251C45.1076 46.0416 48.9542 48.7641 50.6018 52.6456M43.3334 25.7291C43.3334 31.7122 38.4832 36.5625 32.5001 36.5625C26.517 36.5625 21.6667 31.7122 21.6667 25.7291C21.6667 19.746 26.517 14.8958 32.5001 14.8958C38.4832 14.8958 43.3334 19.746 43.3334 25.7291ZM59.5834 32.5C59.5834 47.4577 47.4578 59.5833 32.5001 59.5833C17.5424 59.5833 5.41675 47.4577 5.41675 32.5C5.41675 17.5422 17.5424 5.41663 32.5001 5.41663C47.4578 5.41663 59.5834 17.5422 59.5834 32.5Z" stroke="#2CB3FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="userText">
                    <div className="myName">
                        {name}
                    </div>
                    <div className="myEmail">
                        {email}
                    </div>
                </div>
            </div>
            <hr className='bar'/>

            <div className="mainItems">
                <div className="items">
                    <svg className="itemIcon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.83862 8.22576C4.83862 6.19331 4.83862 5.17709 5.23416 4.4008C5.58209 3.71795 6.13726 3.16278 6.82011 2.81485C7.5964 2.41931 8.61263 2.41931 10.6451 2.41931H18.387C20.4195 2.41931 21.4357 2.41931 22.212 2.81485C22.8948 3.16278 23.45 3.71795 23.7979 4.4008C24.1935 5.17709 24.1935 6.19331 24.1935 8.22576V20.8064C24.1935 22.8389 24.1935 23.8551 23.7979 24.6314C23.45 25.3142 22.8948 25.8694 22.212 26.2173C21.4357 26.6129 20.4195 26.6129 18.387 26.6129H10.6451C8.61263 26.6129 7.5964 26.6129 6.82011 26.2173C6.13726 25.8694 5.58209 25.3142 5.23416 24.6314C4.83862 23.8551 4.83862 22.8389 4.83862 20.8064V8.22576Z" fill="white"/>
                    <path d="M16.9354 13.3064H9.67733M12.0967 18.1451H9.67733M19.3548 8.4677H9.67733M24.1935 8.22576V20.8064C24.1935 22.8389 24.1935 23.8551 23.7979 24.6314C23.45 25.3142 22.8948 25.8694 22.212 26.2173C21.4357 26.6129 20.4195 26.6129 18.387 26.6129H10.6451C8.61263 26.6129 7.5964 26.6129 6.82011 26.2173C6.13726 25.8694 5.58209 25.3142 5.23416 24.6314C4.83862 23.8551 4.83862 22.8389 4.83862 20.8064V8.22576C4.83862 6.19331 4.83862 5.17709 5.23416 4.4008C5.58209 3.71795 6.13726 3.16278 6.82011 2.81485C7.5964 2.41931 8.61263 2.41931 10.6451 2.41931H18.387C20.4195 2.41931 21.4357 2.41931 22.212 2.81485C22.8948 3.16278 23.45 3.71795 23.7979 4.4008C24.1935 5.17709 24.1935 6.19331 24.1935 8.22576Z" stroke="#2CB3FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <g clip-path="url(#clip0_40_302)">
                    <path d="M17.5059 17.7022C17.594 17.416 17.638 17.2728 17.6955 17.1389C17.7466 17.02 17.8055 16.9066 17.8717 16.8C17.9463 16.6799 18.033 16.5715 18.2065 16.3546L25.4838 7.25805C26.1964 6.36727 27.3518 6.36727 28.0644 7.25805C28.777 8.14883 28.777 9.59308 28.0644 10.4839L20.7872 19.5804C20.6137 19.7973 20.5269 19.9057 20.4309 19.9989C20.3456 20.0816 20.2548 20.1553 20.1597 20.2192C20.0526 20.291 19.9381 20.3461 19.7091 20.4562L16.1289 22.1774L17.5059 17.7022Z" fill="white"/>
                    <path d="M17.4567 17.8621C17.5517 17.5532 17.5993 17.3988 17.6807 17.3281C17.752 17.2663 17.8401 17.2429 17.9252 17.2633C18.0227 17.2865 18.1163 17.4035 18.3034 17.6375L19.7609 19.4593C19.948 19.6933 20.0416 19.8102 20.0602 19.932C20.0765 20.0385 20.0578 20.1486 20.0084 20.2376C19.9518 20.3395 19.8283 20.3989 19.5812 20.5177L16.1289 22.1774L17.4567 17.8621Z" fill="white"/>
                    <path d="M16.1289 22.1774L19.7091 20.4562C19.9381 20.3461 20.0526 20.291 20.1597 20.2192C20.2548 20.1553 20.3456 20.0816 20.4309 19.9989C20.5269 19.9057 20.6137 19.7973 20.7872 19.5804L28.0644 10.4839C28.777 9.59308 28.777 8.14883 28.0644 7.25805C27.3518 6.36727 26.1964 6.36727 25.4838 7.25805L18.2065 16.3546C18.033 16.5715 17.9463 16.6799 17.8717 16.8C17.8055 16.9066 17.7466 17.02 17.6955 17.1389C17.638 17.2728 17.594 17.416 17.5059 17.7022L16.1289 22.1774ZM16.1289 22.1774L17.4567 17.8621C17.5517 17.5532 17.5993 17.3988 17.6807 17.3281C17.752 17.2663 17.8401 17.2429 17.9252 17.2633C18.0227 17.2865 18.1163 17.4035 18.3034 17.6375L19.7609 19.4593C19.948 19.6933 20.0416 19.8102 20.0602 19.932C20.0765 20.0385 20.0578 20.1486 20.0084 20.2376C19.9518 20.3395 19.8283 20.3989 19.5812 20.5177L16.1289 22.1774Z" stroke="#2CB3FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_40_302">
                    <rect width="15.4839" height="19.3548" fill="white" transform="translate(14.5161 4.83875)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <p>내가 작성한 후기</p>
                </div>

                <div className="items">
                    <svg className="itemIcon" width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.4285 22.4999C21.4285 21.0047 21.4285 20.2571 21.244 19.6487C20.8285 18.279 19.7566 17.2071 18.3869 16.7916C17.7785 16.6071 17.0309 16.6071 15.5356 16.6071H10.1785C8.68326 16.6071 7.93563 16.6071 7.32728 16.7916C5.95756 17.2071 4.88569 18.279 4.47019 19.6487C4.28564 20.2571 4.28564 21.0047 4.28564 22.4999M17.6785 8.03566C17.6785 10.6985 15.5199 12.8571 12.8571 12.8571C10.1943 12.8571 8.03564 10.6985 8.03564 8.03566C8.03564 5.37286 10.1943 3.21423 12.8571 3.21423C15.5199 3.21423 17.6785 5.37286 17.6785 8.03566Z" stroke="#2CB3FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <g clip-path="url(#clip0_40_287)">
                    <path d="M18.9337 21.396C19.0117 21.1869 19.0507 21.0823 19.1017 20.9845C19.1469 20.8977 19.1991 20.8148 19.2578 20.7369C19.3238 20.6492 19.4006 20.57 19.5543 20.4116L25.9998 13.7672C26.631 13.1165 27.6544 13.1165 28.2856 13.7672C28.9167 14.4178 28.9167 15.4728 28.2856 16.1234L21.84 22.7679C21.6863 22.9263 21.6095 23.0055 21.5244 23.0735C21.4489 23.134 21.3685 23.1878 21.2842 23.2344C21.1894 23.2869 21.0879 23.3272 20.8851 23.4076L17.7141 24.6648L18.9337 21.396Z" fill="white"/>
                    <path d="M18.8902 21.5127C18.9743 21.2872 19.0164 21.1744 19.0886 21.1227C19.1517 21.0776 19.2297 21.0605 19.3051 21.0754C19.3914 21.0923 19.4743 21.1778 19.6401 21.3487L20.931 22.6794C21.0968 22.8503 21.1797 22.9357 21.1961 23.0247C21.2106 23.1025 21.194 23.1829 21.1502 23.2479C21.1001 23.3223 20.9907 23.3657 20.7719 23.4525L17.7141 24.6648L18.8902 21.5127Z" fill="white"/>
                    <path d="M17.7141 24.6648L20.8851 23.4076C21.0879 23.3272 21.1894 23.2869 21.2842 23.2344C21.3685 23.1878 21.4489 23.134 21.5244 23.0735C21.6095 23.0055 21.6863 22.9263 21.84 22.7679L28.2856 16.1234C28.9167 15.4728 28.9167 14.4178 28.2856 13.7672C27.6544 13.1165 26.631 13.1165 25.9998 13.7672L19.5543 20.4116C19.4006 20.57 19.3238 20.6492 19.2578 20.7369C19.1991 20.8148 19.1469 20.8977 19.1017 20.9845C19.0507 21.0823 19.0117 21.1869 18.9337 21.396L17.7141 24.6648ZM17.7141 24.6648L18.8902 21.5127C18.9743 21.2872 19.0164 21.1744 19.0886 21.1227C19.1517 21.0776 19.2297 21.0605 19.3051 21.0754C19.3914 21.0923 19.4743 21.1778 19.6401 21.3487L20.931 22.6794C21.0968 22.8503 21.1797 22.9357 21.1961 23.0247C21.2106 23.1025 21.194 23.1829 21.1502 23.2479C21.1001 23.3223 20.9907 23.3657 20.7719 23.4525L17.7141 24.6648Z" stroke="#2CB3FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_40_287">
                    <rect width="13.7143" height="14.1375" fill="white" transform="translate(16.2856 12)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <p>프로필 수정</p>
                </div>

                <div className="items">
                    <svg className="itemIcon" width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 13.4255V10.7403C8.75 7.03284 11.5482 4.02734 15 4.02734C17.5629 4.02734 19.7655 5.68423 20.7299 8.05512M15 19.4672V22.1523M11 28.194H19C21.1002 28.194 22.1503 28.194 22.9525 27.755C23.6581 27.3689 24.2317 26.7527 24.5913 25.9948C25 25.1332 25 24.0053 25 21.7496V19.8699C25 17.6142 25 16.4863 24.5913 15.6247C24.2317 14.8668 23.6581 14.2506 22.9525 13.8645C22.1503 13.4255 21.1002 13.4255 19 13.4255H11C8.8998 13.4255 7.8497 13.4255 7.04754 13.8645C6.34193 14.2506 5.76825 14.8668 5.40873 15.6247C5 16.4863 5 17.6142 5 19.8699V21.7496C5 24.0053 5 25.1332 5.40873 25.9948C5.76825 26.7527 6.34193 27.3689 7.04754 27.755C7.8497 28.194 8.8998 28.194 11 28.194Z" stroke="#2CB3FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>로그아웃</p>
                </div>

                <div className="items">
                    <svg className="itemIcon" width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0587 23.1615C22.0587 21.6223 22.0587 20.8527 21.8687 20.2264C21.441 18.8164 20.3376 17.713 18.9276 17.2853C18.3013 17.0954 17.5317 17.0954 15.9925 17.0954H10.4778C8.93857 17.0954 8.16896 17.0954 7.54271 17.2853C6.13271 17.713 5.02931 18.8164 4.60159 20.2264C4.41162 20.8527 4.41162 21.6223 4.41162 23.1615M18.1984 8.27183C18.1984 11.0129 15.9763 13.2351 13.2352 13.2351C10.494 13.2351 8.27192 11.0129 8.27192 8.27183C8.27192 5.53071 10.494 3.30859 13.2352 3.30859C15.9763 3.30859 18.1984 5.53071 18.1984 8.27183Z" stroke="#2CB3FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <g clip-path="url(#clip0_511_6364)">
                    <path d="M21.2706 17.6117C21.4518 17.3795 21.5424 17.2634 21.6572 17.1797C21.7589 17.1056 21.874 17.0502 21.9967 17.0166C22.1353 16.9785 22.2863 16.9785 22.5883 16.9785H26.5C27.3648 16.9785 27.7972 16.9785 28.1275 17.1403C28.4181 17.2825 28.6543 17.5096 28.8023 17.7888C28.9706 18.1062 28.9706 18.5218 28.9706 19.3529V22.5187C28.9706 23.3498 28.9706 23.7653 28.8023 24.0828C28.6543 24.362 28.4181 24.589 28.1275 24.7313C27.7972 24.893 27.3648 24.893 26.5 24.893H22.5883C22.2863 24.893 22.1353 24.893 21.9967 24.855C21.874 24.8213 21.7589 24.766 21.6572 24.6918C21.5424 24.6081 21.4518 24.492 21.2706 24.2599L19.0471 21.4106C18.9142 21.2403 18.8477 21.1552 18.8221 21.0617C18.7995 20.9791 18.7995 20.8924 18.8221 20.8098C18.8477 20.7163 18.9142 20.6312 19.0471 20.4609L21.2706 17.6117Z" fill="white"/>
                    <path d="M26.3971 19.4518L23.3089 22.4197M23.3089 19.4518L26.3971 22.4197M19.0471 21.4106L21.2706 24.2599C21.4518 24.492 21.5424 24.6081 21.6572 24.6918C21.7589 24.766 21.874 24.8213 21.9967 24.855C22.1353 24.893 22.2863 24.893 22.5883 24.893H26.5C27.3648 24.893 27.7972 24.893 28.1275 24.7313C28.4181 24.589 28.6543 24.362 28.8023 24.0828C28.9706 23.7653 28.9706 23.3498 28.9706 22.5187V19.3529C28.9706 18.5218 28.9706 18.1062 28.8023 17.7888C28.6543 17.5096 28.4181 17.2825 28.1275 17.1403C27.7972 16.9785 27.3648 16.9785 26.5 16.9785H22.5883C22.2863 16.9785 22.1353 16.9785 21.9967 17.0166C21.874 17.0502 21.7589 17.1056 21.6572 17.1797C21.5424 17.2634 21.4518 17.3795 21.2706 17.6117L19.0471 20.4609C18.9142 20.6312 18.8477 20.7163 18.8221 20.8098C18.7995 20.8924 18.7995 20.9791 18.8221 21.0617C18.8477 21.1552 18.9142 21.2403 19.0471 21.4106Z" stroke="#2CB3FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_511_6364">
                    <rect width="12.3529" height="11.8718" fill="white" transform="translate(17.647 15)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <p>회원 탈퇴</p>
                </div>

                <div>
                    <div className="developers">
                        <p>Developed By</p>
                        <p>멋쟁이사자처럼 대학 12기</p>
                        <p>명지대학교 인문 아이고배야 팀</p>
                        <p>문인배, 안우섭, 윤윤아, 이성아, 최수아</p>
                    </div>
    
                </div>
            </div>

        </div>
    )
}

export default MyPage;
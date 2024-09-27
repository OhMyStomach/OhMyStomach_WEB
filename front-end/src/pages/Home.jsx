import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Home.css';
import MapSearch from '../components/MapSearch';
import TopButton from '../components/TopButton';
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import axios from 'axios';
import BottomSheetModal from '../components/BottomSheetModal';  // 바텀시트 모달 컴포넌트 임포트

const Home = () => {
    const endpoint = import.meta.env.VITE_BE_ENDPOINT;
    const baseUrl = endpoint+'/api';

    const location = useLocation();
    const mapRef = useRef();
    const [toilets, setToilets] = useState([]);
    const [showToiletMarkers, setShowToiletMarkers] = useState(false); // 마커 표시 여부
    const [selectedToilet, setSelectedToilet] = useState(null);  // 선택된 화장실 데이터
    const [isModalOpen, setIsModalOpen] = useState(false);  // 모달 열림 상태 관리

    // 화장실 데이터 불러오기 함수
    const fetchToiletData = async () => {
        try {
            const response = await axios.get(`${baseUrl}/toilets/all`); // 실제 API 경로로 변경
            if (response.data && response.data.code === 200) {  
                console.error('화장실 데이터 출력:', response.data.data);
                setToilets(response.data.data);
                if (mapRef.current && showToiletMarkers) {
                    mapRef.current.addMarkers(response.data.data); // 마커 추가
                }
            } else {
                console.error('데이터를 가져오는 데 실패했습니다.');
            }
            // if (Array.isArray(response.data)) { // 응답 데이터가 배열인지 확인
            //     setToilets(response.data); // 배열인 경우 상태에 저장
            //     if (mapRef.current) {
            //         mapRef.current.addMarkers(response.data); // Map 컴포넌트의 addMarkers 함수 호출
            //     }
            // } else {
            //     console.error('화장실 데이터가 배열 형태가 아닙니다:', response.data);
            // }
        } catch (error) {
            console.error('화장실 데이터를 가져오는 중 오류 발생:', error);
        }
    };

    // 마커 클릭 시 바텀시트 모달 띄우기
    const handleMarkerClick = (toilet) => {
        console.log('선택된 화장실:', toilet);  // 선택된 화장실 정보 확인
        setSelectedToilet(toilet);
        setIsModalOpen(true);  // 모달 열기
    };

    const closeModal = () => {
        setIsModalOpen(false);  // 모달 닫기
    };

    // useEffect(() => {
    //     const endpoint = import.meta.env.VITE_BE_ENDPOINT;
    //     axios.get(endpoint+'/api/toilets/all')
    //       .then(response => {
    //         if (response.data && response.data.code === 200) {
    //           setToilets(response.data.data);
    //         } else {
    //           console.error('데이터를 가져오는 데 실패했습니다.');
    //         }
    //       })
    //       .catch(err => {
    //         console.error('API 호출 오류:', err);
    //       });
    //   }, []);


    useEffect(() => {
        if (showToiletMarkers) {
            fetchToiletData(); // 마커를 보여줄 때만 데이터 가져오기
        } else {
            if (mapRef.current) {
                mapRef.current.addMarkers([]); // 마커를 숨기기 위해 빈 배열을 전달
            }
        }
    }, [showToiletMarkers]); // showToiletMarkers가 변경될 때마다 실행

    // 위치 재검색 함수
    const updateLocation = () => {
        if (mapRef.current) {
            mapRef.current.updateLocation();  // Map 컴포넌트의 updateLocation 함수 호출
        }
    };

    return (
        <div className='Home'>
            <div className="map-wrapper">
                <Map ref={mapRef} toilets={toilets} onMarkerClick={handleMarkerClick} />  {/* ref로 Map 컴포넌트에 접근 */}
                <MapSearch mapRef={mapRef} />
                <TopButton fetchToiletData={fetchToiletData} showToiletMarkers={showToiletMarkers} setShowToiletMarkers={setShowToiletMarkers} />
            </div>
            <Navbar currentPath={location.pathname} updateLocation={updateLocation} />

            {/* 바텀시트 모달 */}
            <BottomSheetModal toilet={selectedToilet} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Home;

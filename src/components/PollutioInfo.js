import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './allCss.modules.css';
import backIcon from '../images/backIcon.png';
import { fetchWeatherWithInput } from '../redux/weather/weatherReducer';

const DetailsPage = () => {
  const dispatch = useDispatch();

  const { countryName } = useParams();

  const formLatAndLong = countryName.split('&');

  useEffect(() => {
    if (countryName === 'Bangladesh') {
      dispatch(fetchWeatherWithInput(24, 90));
    } else if (countryName === 'Pakistan') {
      dispatch(fetchWeatherWithInput(30, 69));
    } else if (countryName === 'India') {
      dispatch(fetchWeatherWithInput(20, 77));
    } else if (countryName === 'Mongolia') {
      dispatch(fetchWeatherWithInput(46, 103));
    } else if (countryName === 'Afghanistan') {
      dispatch(fetchWeatherWithInput(33, 65));
    } else if (countryName === 'Oman') {
      dispatch(fetchWeatherWithInput(11, 57));
    } else if (countryName === 'Qatar') {
      dispatch(fetchWeatherWithInput(25, 51));
    } else if (countryName === 'Kyrgyzstan') {
      dispatch(fetchWeatherWithInput(41, 75));
    } else if (countryName === 'Indonesia') {
      dispatch(fetchWeatherWithInput(6, 106));
    } else if (countryName === 'Bosnia') {
      dispatch(fetchWeatherWithInput(44, 18));
    } else {
      dispatch(fetchWeatherWithInput(formLatAndLong[0], formLatAndLong[1]));
    }
  }, []);

  const navigate = useNavigate();

  const weatherReducer = useSelector((state) => state.weatherReducer);

  const { coord = {}, list = [] } = weatherReducer;

  const dateObject = new Date((list.map((listData) => listData?.dt)) * 1000);
  const humanDateFormat = dateObject.toLocaleString();

  return (
    <div>
      <div className="flex items-center gap-14 bg-[#35538c] text-white px-3 ">
        <button className="back-btn" onClick={() => navigate('/')} type="button">
          <img src={backIcon} alt="back icon" />
        </button>
      </div>
      <div className="w-screen text-white items-center">
        <div className="flex flex-col items-end justify-center bg-[#fb5092] w-screen h-44 px-4">
          <h5 className="text-4xl font-bold">CURRENT</h5>
          <h5 className="text-4xl font-bold">COORDINATE</h5>
          <p className="text-lg font-light">
            Latitude:
            {coord.lat}
          </p>
          <p className="text-lg font-light">
            Longitude:
            {coord.lon}
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#ce4177]">
          <p>Date and time </p>
          <p>
            {humanDateFormat}
            {' '}
            UTC
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#fb5092]">
          <p> Air Quality Index</p>
          <p>{list.map((listData) => listData.main?.aqi)}</p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#ce4177]">
          <p>CO(Carbon monoxide)</p>
          <p>
            {list.map((listData) => listData.components?.co)}
            {' '}
            μg/m3
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#fb5092]">
          <p>NO(Nitrogen monoxide)</p>
          <p>
            {list.map((listData) => listData.components?.no)}
            {' '}
            μg/m3
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#ce4177]">
          <p>NO2(Nitrogen dioxide)</p>
          <p>
            {list.map((listData) => listData.components?.no2)}
            {' '}
            μg/m3
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#fb5092]">
          <p>O3(Ozone)</p>
          <p>
            {list.map((listData) => listData.components?.o3)}
            {' '}
            μg/m3
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#ce4177]">
          <p>SO2(Sulphur dioxide)</p>
          <p>
            {list.map((listData) => listData.components?.so2)}
            {' '}
            μg/m3
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#fb5092]">
          <p>PM2.5(Fine particles matter)</p>
          <p>
            {list.map((listData) => listData.components?.pm2_5)}
            {' '}
            μg/m3
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#ce4177]">
          <p>PM10(Coarse particulate matter)</p>
          <p>
            {list.map((listData) => listData.components?.pm10)}
            {' '}
            μg/m3
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#fb5092]">
          <p>NH3(Ammonia)</p>
          <p>
            {list.map((listData) => listData.components?.nh3)}
            {' '}
            μg/m3
          </p>
        </div>
      </div>
    </div>
  );
};

// DetailsPage.propTypes = {
//   coord: PropTypes.instanceOf(Object),
//   list: PropTypes.instanceOf(Array),
// };

// DetailsPage.defaultProps = {
//   coord: {},
//   list: [],
// };

export default DetailsPage;

import React from 'react';
import './allCss.modules.css';
import { useNavigate } from 'react-router-dom';
import detailIcon from '../images/detailIcon.png';

const PollutionData = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen">
      <div className="h2-top">
        <h2 className="h2-top text-sm text-white md:text-center pl-4 py-1">
          Air Pollution: Top 10 Countries
        </h2>
      </div>

      <div className="grid grid-cols-2">
        <div className="country text-right">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/Bangladesh');
            }}
            type="button"
          >
            <img className="btn-icon" src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">Bangladesh</h4>
            <p>
              {' '}
              World Air Pollution Rank:
              {1}
            </p>
          </div>
        </div>

        <div className="country1 text-right">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/Pakistan');
            }}
            type="button"
          >
            <img className="btn-icon" src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">Pakistan</h4>
            <p>
              {' '}
              World Air Pollution Rank:
              {2}
            </p>
          </div>
        </div>

        <div className="country1 text-right">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/India');
            }}
            type="button"
          >
            <img className="btn-icon" src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">India</h4>
            <p>
              {' '}
              World Air Pollution Rank:
              {3}
            </p>
          </div>
        </div>

        <div className="country text-right">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/Mongolia');
            }}
            type="button"
          >
            <img className="btn-icon" src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">Mongolia</h4>
            <p>
              {' '}
              World Air Pollution Rank:
              {4}
            </p>
          </div>
        </div>

        <div className="country text-right">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/Afghanistan');
            }}
            type="button"
          >
            <img className="btn-icon" src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">Afghanistan</h4>
            <p>
              {' '}
              World Air Pollution Rank:
              {5}
            </p>
          </div>
        </div>

        <div className="country1 text-right">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/Oman');
            }}
            type="button"
          >
            <img className="btn-icon" src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">Oman</h4>
            <p>
              {' '}
              World Air Pollution Rank:
              {6}
            </p>
          </div>
        </div>

        <div className="country1 text-right">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/Qatar');
            }}
            type="button"
          >
            <img className="btn-icon" src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">Qatar</h4>
            <p>
              {' '}
              World Air Pollution Rank:
              {7}
            </p>
          </div>
        </div>

        <div className="country text-right">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/Kyrgyzstan');
            }}
            type="button"
          >
            <img className="btn-icon" src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">Kyrgyzstan</h4>
            <p>
              {' '}
              World Air Pollution Rank:
              {8}
            </p>
          </div>
        </div>

        <div className="country text-right">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/Indonesia');
            }}
            type="button"
          >
            <img className="btn-icon" src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">Indonesia</h4>
            <p>
              {' '}
              World Air Pollution Rank:
              {9}
            </p>
          </div>
        </div>

        <div className="country1 text-right">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/Bosnia');
            }}
            type="button"
          >
            <img className="btn-icon" src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">Bosnia</h4>
            <p>
              {' '}
              World Air Pollution Rank:
              {10}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default PollutionData;

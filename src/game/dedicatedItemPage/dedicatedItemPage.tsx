import React from "react";
import { Topbar } from "../common";
import { Trans } from "react-i18next";
import image from "./item.png";
import photo from "./image.png";
import "./styles/_dedicatedItemPageStyles.scss";

const DedicatedItemPage = () => {
  const ItemImage = () => (
    <div className="itemInfDetails_details_attributes_container_pic">
      <img src={photo} alt="dedicatedItem" />
    </div>
  );

  const Attributes = () => (
    <ul className="itemInfDetails_details_attributes_container_stats">
      <li className="stat">
        <Trans>dedicated-equipment-section.item-info.attributes.공격력</Trans>
      </li>
      <li className="stat">
        <Trans>dedicated-equipment-section.item-info.attributes.방어력</Trans>
      </li>
      <li className="stat">
        <Trans>
          dedicated-equipment-section.item-info.attributes.최대생명력
        </Trans>
      </li>
    </ul>
  );

  const AttributeValues = () => (
    <ul className="itemInfDetails_details_attributes_container_numbers">
      <li>100 - 299</li>
      <li>100 - 299</li>
      <li>100 - 299</li>
    </ul>
  );

  const Checkbox = () => (
    <span className="itemInfDetails_options_elements_checkbox">
      <div className="roundedOne">
        <input type="checkbox" value="None" id="roundedOne" name="check" />
        <label htmlFor="roundedOne" />
      </div>
    </span>
  );

  const Description = () => (
    <span className="itemInfDetails_options_elements_description">
      description
    </span>
  );

  const ItemInfo = () => (
    <div className="itemInfo">
      <div className="itemInfoHeader">
        <Trans>Title</Trans>
      </div>
      <div className="itemInfDetails">
        <div className="itemInfDetails_type">
          <Trans>dedicated-equipment-section.item-info.일반옵션</Trans>
        </div>
        <div className="itemInfDetails_details">
          <div className="itemInfDetails_details_attributes">
            <div className="itemInfDetails_details_attributes_container">
              <ItemImage />
              <Attributes />
              <AttributeValues />
            </div>
          </div>
        </div>
        <div className="itemInfDetails_itemOptions">
          <Trans>dedicated-equipment-section.item-info.특수옵션</Trans>
        </div>
        <div className="itemInfDetails_options">
          {[0, 1, 2].map((descriptions, idx) => (
            <div className="itemInfDetails_options_elements">
              <Checkbox />
              <Description />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const filterButtons = [
    { title: <Trans>dedicated-equipment-section.buttons.쥬다스</Trans> },
    { title: <Trans>dedicated-equipment-section.buttons.다이아</Trans> },
    { title: <Trans>dedicated-equipment-section.buttons.오목</Trans> },
    {
      title: <Trans>dedicated-equipment-section.buttons.란드그리드</Trans>,
    },
  ];

  const FilterButtons = () => {
    return (
      <div className="itemSelection_filterButtons">
        {filterButtons.map((button, idx) => (
          <button className="itemSelection_filterButtons_button" key={idx}>
            {button.title}
          </button>
        ))}
      </div>
    );
  };

  const ConfirmButtons = () => {
    return (
      <div className="itemSelection_confirmButtons">
        {[
          { title: <Trans>dedicated-equipment-section.초기화</Trans> },
          { title: <Trans>dedicated-equipment-section.선택</Trans> },
        ].map((button, idx) => (
          <button className="itemSelection_confirmButtons_button" key={idx}>
            {button.title}
          </button>
        ))}
      </div>
    );
  };

  const DedicatedItems = () => {
    return (
      <div className="itemSelection_dedicatedItems">
        <ul className="itemSelection_dedicatedItems_row">
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20,
          ].map((items, idx) => (
            <li key={idx} className="dedicatedItem">
              <img src={image} alt="card" />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const ItemSelection = () => (
    <div className="itemSelection">
      <div className="itemSelectionHeader">
        <Trans>dedicated-equipment-section.원하는아이템을선택하세요</Trans>
      </div>
      <DedicatedItems />
      <FilterButtons />
      <ConfirmButtons />
    </div>
  );

  return (
    <div className="dedicatedItemPage">
      <div className="dedicatedItemPage_container">
        <Topbar />
        <div className="specialItemContainer">
          <ItemInfo />
          <ItemSelection />
        </div>
      </div>
    </div>
  );
};

export default DedicatedItemPage;

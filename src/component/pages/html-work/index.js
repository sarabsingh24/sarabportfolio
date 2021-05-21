import React from "react";
import WorkThumb from "../../common/work-thumb";
import Column from "../../common/column";
import { workInfo } from "../../data/workInfo";
import MainPageBanner from "../../common/main-page-banner";
import ProfileLink from "../../common/proflle-link";
import Container from "../../common/container";
export default function Index() {
  return (
    <>
    
        <p>HTML Link</p>
        <WorkThumb boxArray={workInfo} />
      
    </>
  );
}

import React from 'react';
import PlanItemView from "../PlanView/PlanItemView";
import ResultList from "../ResultList/ResultList";
import Search from "../Search/Search";
import DetailItem from "../Details/DetailsItem";


// Change current content of PlanView
 var contentDetail = [
    {
        date: '2019-01-04',
        content : <PlanItemView/>
    },
    {
        date: '2019-01-05',
        content : <Search/>

    },
    {
        date:'2019-01-08',
        content : <DetailItem/>
    },
    {
        date:'2019-01-10',
        content : <ResultList/>
    }

];

export default contentDetail 
import React from 'react';
import PlanViewDetails from "../PlanViewDetail/PlanViewDetail"

// Change current content of PlanView
 var contentDetail = [
    {
        date: '2019-01-04',
        content : <PlanViewDetails UI="PlanItemView"/>
    },
    {
        date: '2019-01-05',
        content : <PlanViewDetails/>
    },
    {
        date:'2019-01-08',
        content : <PlanViewDetails/>
    },
    {
        date:'2019-01-10',
        content : <PlanViewDetails/>
    }

];

export default contentDetail 
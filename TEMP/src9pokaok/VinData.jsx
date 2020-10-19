import React from "react";

import s from "./VinData.module.css";

const VinData = (props) => {
    debugger;

    function getSum(total, num) {
        return total + Math.round(num);
    }

    if (props.vinData2 != null && props.vinData3 != null)
        return (
            <div>

                <div>
                    Vin: {props.vinData2.vin}
                </div>
                <div>
                    Vehicle: {props.vinData2.vehicle}
                </div>

                <div id={s.va_oc_table}>
                    <table id={s.va_oc_data_table}>
                        <thead>
                        <tr>
                            <td></td>
                            <td>Year 1</td>
                            <td>Year 2</td>
                            <td>Year 3</td>
                            <td>Year 4</td>
                            <td>Year 5</td>
                            <td>Total</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Depreciation</td>
                            <td id="va_oc_depreciation1">${props.vinData2.depreciation_cost[0]}</td>
                            <td id="va_oc_depreciation2">${props.vinData2.depreciation_cost[1]}</td>
                            <td id="va_oc_depreciation3">${props.vinData2.depreciation_cost[2]}</td>
                            <td id="va_oc_depreciation4">${props.vinData2.depreciation_cost[3]}</td>
                            <td id="va_oc_depreciation5">${props.vinData2.depreciation_cost[4]}</td>
                            <td id="va_oc_depreciation_total">${props.vinData2.depreciation_cost.reduce(getSum, 0)}</td>
                        </tr>
                        <tr>
                            <td>Insurance</td>
                            <td id="va_oc_insurance1">${props.vinData2.insurance_cost[0]}</td>
                            <td id="va_oc_insurance2">${props.vinData2.insurance_cost[1]}</td>
                            <td id="va_oc_insurance3">${props.vinData2.insurance_cost[2]}</td>
                            <td id="va_oc_insurance4">${props.vinData2.insurance_cost[3]}</td>
                            <td id="va_oc_insurance5">${props.vinData2.insurance_cost[4]}</td>
                            <td id="va_oc_insurance_total">${props.vinData2.insurance_cost.reduce(getSum, 0)}</td>
                        </tr>
                        <tr>
                            <td>Fuel</td>
                            <td id="va_oc_fuel1">${props.vinData2.fuel_cost[0]}</td>
                            <td id="va_oc_fuel2">${props.vinData2.fuel_cost[1]}</td>
                            <td id="va_oc_fuel3">${props.vinData2.fuel_cost[2]}</td>
                            <td id="va_oc_fuel4">${props.vinData2.fuel_cost[3]}</td>
                            <td id="va_oc_fuel5">${props.vinData2.fuel_cost[4]}</td>
                            <td id="va_oc_fuel_total">${props.vinData2.fuel_cost.reduce(getSum, 0)}</td>
                        </tr>
                        <tr>
                            <td>Maintenance</td>
                            <td id="va_oc_maintenance1">${props.vinData2.maintenance_cost[0]}</td>
                            <td id="va_oc_maintenance2">${props.vinData2.maintenance_cost[1]}</td>
                            <td id="va_oc_maintenance3">${props.vinData2.maintenance_cost[2]}</td>
                            <td id="va_oc_maintenance4">${props.vinData2.maintenance_cost[3]}</td>
                            <td id="va_oc_maintenance5">${props.vinData2.maintenance_cost[4]}</td>
                            <td id="va_oc_maintenance_total">${props.vinData2.maintenance_cost.reduce(getSum, 0)}</td>
                        </tr>
                        <tr>
                            <td>Repairs</td>
                            <td id="va_oc_repairs1">${props.vinData2.repairs_cost[0]}</td>
                            <td id="va_oc_repairs2">${props.vinData2.repairs_cost[1]}</td>
                            <td id="va_oc_repairs3">${props.vinData2.repairs_cost[2]}</td>
                            <td id="va_oc_repairs4">${props.vinData2.repairs_cost[3]}</td>
                            <td id="va_oc_repairs5">${props.vinData2.repairs_cost[4]}</td>
                            <td id="va_oc_repairs_total">${props.vinData2.repairs_cost.reduce(getSum, 0)}</td>
                        </tr>
                        <tr>
                            <td>Taxes &amp; Fees</td>
                            <td id="va_oc_fees1">${props.vinData2.fees_cost[0]}</td>
                            <td id="va_oc_fees2">${props.vinData2.fees_cost[0]}</td>
                            <td id="va_oc_fees3">${props.vinData2.fees_cost[0]}</td>
                            <td id="va_oc_fees4">${props.vinData2.fees_cost[0]}</td>
                            <td id="va_oc_fees5">${props.vinData2.fees_cost[0]}</td>
                            <td id="va_oc_fees_total">${props.vinData2.fees_cost.reduce(getSum, 0)}</td>
                        </tr>
                        <tr className="va_oc_data_table_lastrow">
                            <td>Ownership Costs</td>
                            <td id="va_oc_ownershipcost1">${props.vinData2.total_cost[0]}</td>
                            <td id="va_oc_ownershipcost2">${props.vinData2.total_cost[1]}</td>
                            <td id="va_oc_ownershipcost3">${props.vinData2.total_cost[2]}</td>
                            <td id="va_oc_ownershipcost4">${props.vinData2.total_cost[3]}</td>
                            <td id="va_oc_ownershipcost5">${props.vinData2.total_cost[4]}</td>
                            <td id="va_oc_ownershipcost_total">${props.vinData2.total_cost_sum}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div id={s.va_oc_table}>
                    <table id={s.va_oc_data_table}>
                        <thead>
                        <tr>
                            <td></td>
                            <td>Minimim</td>
                            <td>Average</td>
                            <td>Maximum</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Market Value</td>
                            <td id="va_oc_depreciation1">${props.vinData3.prices.below}</td>
                            <td id="va_oc_depreciation2">${props.vinData3.prices.average}</td>
                            <td id="va_oc_depreciation3">${props.vinData3.prices.above}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        )

    return null;
}

export default VinData;
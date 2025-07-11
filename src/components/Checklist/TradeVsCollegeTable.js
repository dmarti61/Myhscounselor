// TradeVsCollegeTable.js
import React from 'react';

const TradeVsCollegeTable = ({ type }) => {
  const comparisonData = {
    Builder: {
      tradePros: ['Hands-on work', 'Shorter training time', 'Lower upfront cost'],
      collegePros: ['Broader career options', 'Potential for higher earnings long-term', 'Access to campus resources']
    },
    Planner: {
      tradePros: ['Tactical skillsets', 'Focused learning paths', 'Fast career entry'],
      collegePros: ['Structured degree tracks', 'Networking opportunities', 'Advanced certifications']
    },
    Connector: {
      tradePros: ['People-facing roles in real environments', 'Flexible training schedules', 'Community-based programs'],
      collegePros: ['Clubs, leadership roles, team projects', 'Career services', 'Internship pipelines']
    },
    Explorer: {
      tradePros: ['Freedom to explore fields', 'Lower risk to pivot', 'Boots-on-ground learning'],
      collegePros: ['Electives, minors, interdisciplinary choices', 'Research opportunities', 'Broader exploration']
    }
  };

  const data = comparisonData[type] || comparisonData.Builder;

  return (
    <div className="comparison-table">
      <h4>Trade vs College Snapshot</h4>
      <table>
        <thead>
          <tr>
            <th>💼 Trade</th>
            <th>🎓 College</th>
          </tr>
        </thead>
        <tbody>
          {data.tradePros.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>{data.collegePros[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeVsCollegeTable;

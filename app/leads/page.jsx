"use client"

import DataTable from "react-data-table-component"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts"
/* data table */

const StarRating = ({ rating }) => {

  return (

    <div>

      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}

    </div>

  )

}

/* Columns */

const columns = [

  {
    name: "Name",
    selector: row => row.name,
    sortable: true
  },

  {
    name: "Company",
    selector: row => row.company,
    sortable: true
  },

  {
    name: "Status",
    selector: row => row.status,
    sortable: true
  },

  {
    name: "Lead Score",
    cell: row => <StarRating rating={row.score} />
  },

  {
    name: "Owner",
    selector: row => row.owner
  },

  {
    name: "Created",
    selector: row => row.created,
    sortable: true
  }

]

/* Data */

const data = [

  {
    name: "Emma Davies",
    company: "Acme Corp",
    status: "New",
    score: 2,
    owner: "Peter B.",
    created: "Apr 25, 2024"
  },

  {
    name: "Bryan Carter",
    company: "GreenTech",
    status: "Contacted",
    score: 4,
    owner: "Sarah L.",
    created: "Apr 24, 2024"
  },

  {
    name: "Linda Kim",
    company: "Orbit Ltd",
    status: "Qualified",
    score: 4,
    owner: "Mark R.",
    created: "Apr 23, 2024"
  },

  {
    name: "Orbit Ltd",
    company: "Nova Solutions",
    status: "Contacted",
    score: 5,
    owner: "Sarah L.",
    created: "Apr 22, 2024"
  },

  {
    name: "Steve Marshall",
    company: "Beta Enterprises",
    status: "Proposal Made",
    score: 3,
    owner: "Michael H.",
    created: "Apr 21, 2024"
  }

]

/* Custom Styles */

const customStyles = {

  rows: {
    style: {
      backgroundColor: "rgba(255,255,255,0.6)"
    }
  },

  headCells: {
    style: {
      fontWeight: "bold"
    }
  }

}

// pie chart


const pieChartData = [
  { name: "Website", value: 38 },
  { name: "Referral", value: 25 },
  { name: "Social", value: 18 },
  { name: "Email", value: 12 },
  { name: "Ads", value: 7 }
]

const COLORS = [
  "#5B6CFF",
  "#7A5CD6",
  "#4BC0C0",
  "#F6C667",
  "#FF6B6B"
]






// pie chart 2

const pieChartDataTwo = [

  { name: "New", value: 36 },
  { name: "Contacted", value: 17 },
  { name: "Qualified", value: 25 },
  { name: "Proposal Made", value: 17 },
  { name: "Negotiation", value: 12 },
  { name: "Unqualified", value: 5 }

]

const pieColor = [

  "#5B6CFF",   // New
  "#4BC0C0",   // Contacted
  "#8BC34A",   // Qualified
  "#F6C667",   // Proposal
  "#FF7043",   // Negotiation
  "#9C27B0"    // Unqualified

]






function page() {
  return (

    <section className="container-fluid py-3">


      {/* ROW 2  */}


      <div className="row g-3 mb-3">

        {/* Pipeline */}

        <div className="col-12 col-lg-8">

          <DataTable
            columns={columns}
            data={data}

            pagination

            highlightOnHover

            responsive

            customStyles={customStyles}
          />

        </div>


        {/* Pie Chart */}

        <div className="col-12 col-lg-4">

          <div className="card dashboard-card h-100">

            <div className="card-body">

              <h5 className="card-title">
                Lead Sources
              </h5>

              <div className="horizontalLine" />

              <div style={{ width: "100%", height: 260 }}>

                <ResponsiveContainer>

                  <PieChart>

                    <Tooltip />

                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={0}
                      outerRadius={90}
                      dataKey="value"
                      label
                    >

                      {pieChartData.map((entry, index) => (

                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index]}
                        />

                      ))}

                    </Pie>

                  </PieChart>

                </ResponsiveContainer>

              </div>

            </div>

          </div>

        </div>

      </div>




      {/* ROW 3  */}


      <div className="row g-3 mb-3">

        <div className="col-12 col-lg-4">
          <div className="card dashboard-card h-100">
            <div className="card-body">
              Lead Conversion Rate
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card dashboard-card h-100">
            <div className="card-body">
              Top Opportunities
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">

          <div className="card dashboard-card h-100">

            <div className="card-body">

              <h5 className="card-title">
                Lead Status Distribution
              </h5>

              <div className="horizontalLine" />

              <div style={{ width: "100%", height: 260 }}>

                <ResponsiveContainer>

                  <PieChart>

                    <Tooltip />

                    <Pie
                      data={pieChartDataTwo}
                      cx="50%"
                      cy="45%"
                      outerRadius={85}
                      dataKey="value"

                      label={({ percent }) =>
                        `${(percent * 100).toFixed(0)}%`
                      }

                      labelLine={false}
                    >

                      {pieChartDataTwo.map((entry, index) => (

                        <Cell
                          key={`cell-${index}`}
                          fill={pieColor[index]}
                        />

                      ))}

                    </Pie>

                  </PieChart>

                </ResponsiveContainer>

              </div>


              {/* Legend */}

              <div className="customLegend">

                {pieChartData.map((item, index) => (

                  <div
                    key={index}
                    className="legendItem"
                  >

                    <span
                      className="legendColor"
                      style={{
                        backgroundColor: pieColor[index]
                      }}
                    />

                    {item.name}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ROW 4*/}


      <div className="row g-3">

        <div className="col-12 col-lg-4">
          <div className="card dashboard-card h-100">
            <div className="card-body">
              Upcoming Meetings
            </div>
          </div>
        </div>

      </div>

    </section>

  )
}

export default page
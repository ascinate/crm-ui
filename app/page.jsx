"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import {
  FunnelChart,
  Funnel,

  ResponsiveContainer,
  LabelList,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,

  CartesianGrid
} from "recharts"


import { ProgressBar } from "react-bootstrap"




// for line chart 



function page() {

  const [checked, setChecked] = useState(false)


  const dataTwo = [
    { month: "Jun", blue: 12, red: 20 },
    { month: "Jul", blue: 25, red: 18 },
    { month: "Aug", blue: 20, red: 22 },
    { month: "Sep", blue: 30, red: 27 },
    { month: "Oct", blue: 26, red: 24 }
  ]

  const data = [
    {
      name: "Prospect",
      value: 120,
      amount: "$75,200"
    },
    {
      name: "Qualified",
      value: 68,
      amount: "$48,800"
    },
    {
      name: "Proposal",
      value: 32,
      amount: "$27,300"
    },
    {
      name: "Negotiation",
      value: 18,
      amount: "$19,600"
    },
    {
      name: "Closed",
      value: 34,
      amount: "$87,950"
    }
  ]

  const colors = [
    "#5B6CFF",
    "#7A5CD6",
    "#FF7B54",
    "#FF5E5E",
    "#1F3C88"
  ]



  const router = useRouter()





  const [tasks, setTasks] = useState([
    false,
    false,
    false,
    false,
    false
  ])

  // Count completed tasks
  const completed = tasks.filter(Boolean).length

  // Progress %
  const progress =
    (completed / tasks.length) * 100

  // Navigate when all checked
  useEffect(() => {

    if (completed === tasks.length) {

      setTimeout(() => {

        router.push("/leads") // next page

      }, 800)

    }

  }, [completed])

  return (

    <section className="container-fluid py-3">


      {/* ROW 1  */}


      <div className="row g-3 mb-3">
        {/* Card 1 */}
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card statCard stat-orange h-100">

            <div className="card-body">

              <div className="d-flex justify-content-between align-items-start">

                <div>
                  <p className="statTitle">New Leads</p>

                  <h3 className="statValue">
                    158
                  </h3>

                  <p className="statGrowth text-success">
                    ▲ 12.4%
                  </p>
                </div>

                <div className="statArrow">
                  ↗
                </div>

              </div>

            </div>

            <div className="statBar bar-orange"></div>

          </div>
        </div>



        {/* Card 2 */}
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card statCard stat-green h-100">

            <div className="card-body">

              <div className="d-flex justify-content-between align-items-start">

                <div>
                  <p className="statTitle">Deals Closed</p>

                  <h3 className="statValue">
                    34
                  </h3>

                  <p className="statGrowth text-success">
                    ▲ 9.1%
                  </p>
                </div>

                <div className="statArrow">
                  ↗
                </div>

              </div>

            </div>

            <div className="statBar bar-green"></div>

          </div>
        </div>



        {/* Card 3 */}
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card statCard stat-blue h-100">

            <div className="card-body">

              <div className="d-flex justify-content-between align-items-start">

                <div>
                  <p className="statTitle">Revenue</p>

                  <h3 className="statValue">
                    $87,950
                  </h3>

                  <p className="statGrowth text-success">
                    ▲ 16.7%
                  </p>
                </div>

                <div className="statArrow">
                  ↗
                </div>

              </div>

            </div>

            <div className="statBar bar-blue"></div>

          </div>
        </div>



        {/* Card 4 */}
        <div className="col-12 col-md-6 col-xl-3">
   <div className="card statCard stat-purple h-100">

  <div className="card-body">

    <div className="d-flex justify-content-between align-items-center">

      {/* Left Content */}

      <div className="flex-grow-1">

        <p className="statTitle">
          Customer Satisfaction
        </p>

        <h3 className="statValue">
          93%
        </h3>

        {/* Progress Badge */}

        <div className="satisfactionBar">
          <span className="satisfactionText">
            Excellent
          </span>
        </div>
      </div>


      {/* Smile Icon */}

      <div className="statSmileWrapper">

        <img
          src="/smile.png"   // your smile image
          alt="smile"
          className="statSmileImg"
        />

      </div>

    </div>

  </div>

  <div className="statBar bar-purple"></div>

</div>
        </div>

      </div>



      {/* ROW 2  */}

      <div className="row g-3 mb-3">
        {/* Pipeline */}
        <div className="col-12 col-lg-8">
          <div className="card statCard  " >
            <div className="card-body">
              <h5 className="statTitle statTitle">Sales Pipeline</h5>
              <div className="horizontalLine" />
              <div style={{ width: "100%", height: 320 }}>

                <ResponsiveContainer>
                  <FunnelChart>
                    <Tooltip />
                    <Funnel
                      dataKey="value"
                      data={data}
                      isAnimationActive
                    >

                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[index]}
                        />
                      ))}

                      <LabelList
                        position="center"
                        dataKey="name"
                        fill="#fff"
                        stroke="none"
                      />
                    </Funnel>
                  </FunnelChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks */}
        <div className="col-12 col-lg-4">
          <div className="card statCard " >
            <div className="card-body">

              <div className="d-flex align-items-center gap-3 ">
                <h5 className="statTitle statTitle">Tasks Overview</h5>
                <div className="flex-grow-1 me-2">
                  <ProgressBar now={progress} animated striped
                  />
                </div>
              </div>

              <div className="horizontalLine" />
              <div className="taskOverViewForm">
                <input
                  type="checkbox"
                  checked={tasks[0]}
                  onChange={() => {
                    const newTasks = [...tasks]
                    newTasks[0] = !newTasks[0]
                    setTasks(newTasks)
                  }}
                />
                <label className="ms-2">  Follow up with Acme Corp </label>
              </div>
              <div className="taskOverViewForm">
                <input type="checkbox" checked={tasks[1]} onChange={() => {
                  const newTasks = [...tasks]
                  newTasks[1] = !newTasks[1]
                  setTasks(newTasks)
                }} />
                <label className="ms-2">  Send contract to Green Tech</label>
              </div>
              <div className="taskOverViewForm">
                <input type="checkbox" checked={tasks[2]} onChange={() => {
                  const newTasks = [...tasks]
                  newTasks[2] = !newTasks[2]
                  setTasks(newTasks)
                }} />
                <label className="ms-2">  Schedule demo with Orbit Ltd. </label>
              </div>
              <div className="taskOverViewForm">
                <input type="checkbox" checked={tasks[3]} onChange={() => {
                  const newTasks = [...tasks]
                  newTasks[3] = !newTasks[3]
                  setTasks(newTasks)
                }} />
                <label className="ms-2">  Call back Bryan Carter</label>
              </div>
              <div className="taskOverViewForm">
                <input type="checkbox" checked={tasks[4]} onChange={() => {
                  const newTasks = [...tasks]
                  newTasks[4] = !newTasks[4]
                  setTasks(newTasks)
                }} />
                <label className="ms-2">  Prepare Q2 report </label>
              </div>
              <div className="horizontalLine" />
              <div className="d-flex">
                <div className="flex-grow-1 me-2">

                  <div className="flex-grow-1 me-2">

                    <ProgressBar className="customProgress">

                      {/* Completed */}
                      <ProgressBar
                        now={progress}
                        className="progressBlue"
                        key={1}
                      />


                    </ProgressBar>

                  </div>
                </div>
                <p className="mb-0">
                  {completed}/{tasks.length}
                </p>

              </div>
            </div>
          </div>
        </div>

      </div>




      {/* ROW 3  */}


      <div className="row g-3 mb-3">

        <div className="col-12 col-lg-4">


          <div className="card statCard " >
            <div className="card-body">
              <h5 className="statTitle">Lead Conversion Rate</h5>
              <div className="horizontalLine" />
              <div style={{ width: "100%", height: 220 }}>
                <ResponsiveContainer>

                  <LineChart data={dataTwo}>

                    {/* Grid */}
                    <CartesianGrid
                      strokeDasharray="3 3"
                      opacity={0.3}
                    />

                    {/* X Axis */}
                    <XAxis
                      dataKey="month"
                    />

                    {/* Y Axis */}
                    <YAxis
                      domain={[10, 40]}
                    />

                    {/* Tooltip */}
                    <Tooltip />

                    {/* Blue Line */}
                    <Line
                      type="monotone"
                      dataKey="blue"
                      stroke="#5B6CFF"
                      strokeWidth={3}
                      dot={{ r: 5 }}
                    />

                    {/* Red Line */}
                    <Line
                      type="monotone"
                      dataKey="red"
                      stroke="#FF6B6B"
                      strokeWidth={3}
                      dot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

        </div>

        <div className="col-12 col-lg-4">

          <div className="card statCard  dashboard-card h-100">

            <div className="card-body">

              {/* Header */}

              <div className="d-flex justify-content-between align-items-center mb-2">

                <h5 className="statTitle mb-0">
                  Top Opportunities
                </h5>

                <span className="dotsMenu">
                  •••
                </span>

              </div>

              <div className="horizontalLine" />

              {/* Table */}

              <div className="table-responsive">

                <table className="table tableColor">

                  <tbody>

                    <tr>
                      <td>

                        <span className="colorDot green"></span>

                        <span className="ms-2">
                          Nova Solutions
                        </span>

                      </td>

                      <td className="text-end amountText">
                        $24,200
                      </td>

                    </tr>

                    <tr>
                      <td>

                        <span className="colorDot lightgreen"></span>

                        <span className="ms-2">
                          Beta Enterprises
                        </span>

                      </td>

                      <td className="text-end amountText">
                        $18,700
                      </td>

                    </tr>

                    <tr>
                      <td>

                        <span className="colorDot blue"></span>

                        <span className="ms-2">
                          Evergreen Inc.
                        </span>

                      </td>

                      <td className="text-end amountText">
                        $14,600
                      </td>

                    </tr>

                    <tr>
                      <td>

                        <span className="colorDot orange"></span>

                        <span className="ms-2">
                          Skyline Media
                        </span>

                      </td>

                      <td className="text-end amountText">
                        $9,800
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

        <div className="col-12 col-lg-4">

          <div className="card  statCard dashboard-card h-100">

            <div className="card-body">

              {/* Header */}

              <div className="d-flex justify-content-between align-items-center mb-2">

                <h5 className="statTitle mb-0">
                  Recent Activities
                </h5>

                <span className="dotsMenu">
                  •••
                </span>

              </div>

              <div className="horizontalLine" />

              {/* Activity List */}

              <ul className="activityList">

                {/* Item 1 */}

                <li className="activityListItem" >

                  <div className="activityIcon avatar" style={{ backgroundColor: '#00bfd4' }}>

                    <img
                      src="/1.png"
                      alt="user"
                    />

                  </div>

                  <div className="activityContent">

                    <span>
                      <strong>Emma D.</strong> added a new lead - Johnson Group
                    </span>

                    <small>
                      1 min ago
                    </small>

                  </div>

                </li>



                {/* Item 2 */}

                <li className="activityListItem">
                  <div className="activityIcon avatar" style={{ backgroundColor: '#C7774E' }}>

                    <img
                      src="/2.png"
                      alt="user"
                    />

                  </div>


                  <div className="activityContent">

                    <span>
                      Meeting scheduled with <strong>GreenTech</strong>
                    </span>

                    <small>
                      4h ago
                    </small>

                  </div>

                </li>



                {/* Item 3 */}

                <li className="activityListItem">

                  <div className="activityIcon avatar" style={{ backgroundColor: '#8F9645' }}>

                    <img
                      src="/3.png"
                      alt="user"
                    />

                  </div>


                  <div className="activityContent">

                    <span>
                      Michael closed a deal - Beta Enterprises
                      <strong> $19,700</strong>
                    </span>

                    <small>
                      1h ago
                    </small>

                  </div>

                </li>



                {/* Item 4 */}

                <li className="activityListItem">

                  <div className="activityIcon avatar" style={{ backgroundColor: '#4379C2' }}>

                    <img
                      src="/1.png"
                      alt="user"
                    />

                  </div>


                  <div className="activityContent">

                    <span>
                      Email sent to Skyline Media
                    </span>

                    <small>
                      2 days ago
                    </small>

                  </div>

                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>




      {/* ROW 4*/}


      <div className="row g-3">

        <div className="col-12 col-lg-4">

          <div className="card statCard  dashboard-card h-100" style={{ backgroundColor: 'rgba(78, 80, 175, 0.7) !IMPORTANT', color: '#fff' }}>

            <div className="card-body">

              {/* Header */}

              <div className="d-flex justify-content-between align-items-center mb-2">

                <h5 className=" mb-0">
                  📅 Upcoming Meetings
                </h5>

                <span className="dotsMenu">
                  •••
                </span>

              </div>

              <div className="horizontalLine" />

              {/* Meeting List */}

              <ul className="meetingList">

                {/* Meeting 1 */}

                <li className="meetingItem">

                  <div className="meetingIcon">
                    <img
                      src="/clock.png"
                      alt="user"
                    />
                  </div>

                  <div className="meetingContent">

                    <span className="meetingTime">
                      10:00 AM
                    </span>

                    <span className="meetingTitle">
                      Call with Acme Corp
                    </span>

                  </div>

                </li>



                {/* Meeting 2 */}

                <li className="meetingItem">

                  <div className="meetingIcon">
                    <img
                      src="/clock.png"
                      alt="user"
                    />
                  </div>

                  <div className="meetingContent">

                    <span className="meetingTime">
                      1:30 PM
                    </span>

                    <span className="meetingTitle">
                      Demo with Orbit Ltd
                    </span>

                  </div>

                </li>



                {/* Meeting 3 */}

                <li className="meetingItem">

                  <div className="meetingIcon">
                    <img
                      src="/clock.png"
                      alt="user"
                    />
                  </div>

                  <div className="meetingContent">

                    <span className="meetingTime">
                      3:00 PM
                    </span>

                    <span className="meetingTitle">
                      Strategy Session
                    </span>

                  </div>

                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>

  )
}

export default page
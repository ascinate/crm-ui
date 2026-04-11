"use client"

function page() {
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

        <div className="d-flex justify-content-between align-items-start">

          <div>
            <p className="statTitle">
              Customer Satisfaction
            </p>

            <h3 className="statValue">
              93%
            </h3>

            <span className="badge bg-success">
              Excellent
            </span>
          </div>

          <div className="statSmile">
            🙂
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
          <div className="card dashboard-card h-100">
            <div className="card-body">
              Sales Pipeline
            </div>
          </div>
        </div>

        {/* Tasks */}
        <div className="col-12 col-lg-4">
          <div className="card dashboard-card h-100">
            <div className="card-body">
              Tasks Overview
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
              Recent Activities
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
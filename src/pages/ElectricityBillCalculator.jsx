import { useState } from 'react'
import '../css/ElectricityBillCalculator.css'

function ElectricityBillCalculator() {
  const [customerName, setCustomerName] = useState('')
  const [consumption, setConsumption] = useState('')
  const [rate, setRate] = useState(0)
  const [totalBill, setTotalBill] = useState(0)
  const [usageStatus, setUsageStatus] = useState('')
  const [showResult, setShowResult] = useState(false)

  const calculateBill = () => {
    const kWh = Number(consumption)

    let appliedRate

    if (kWh <= 100) {
      appliedRate = 10
    } else if (kWh <= 200) {
      appliedRate = 12
    } else if (kWh <= 300) {
      appliedRate = 15
    } else {
      appliedRate = 18
    }

    const bill = kWh * appliedRate

    setRate(appliedRate)
    setTotalBill(bill)

    if (bill >= 5000) {
      setUsageStatus('High Electricity Usage')
    } else {
      setUsageStatus('Normal Electricity Usage')
    }

    setShowResult(true)
  }

  const clearForm = () => {
    setCustomerName('')
    setConsumption('')
    setRate(0)
    setTotalBill(0)
    setUsageStatus('')
    setShowResult(false)
  }

  return (
    <section className="blank-page electricity-page page-enter">
      <span className="activity-label">ACTIVITY 04</span>

      <h1>Electricity Bill Calculator</h1>

      <p>
        Enter the customer's electricity consumption to calculate their total bill.
      </p>

      <div className="electricity-calculator">

        <div className="electricity-form">

          <div className="electricity-input">
            <label htmlFor="customerName">
              Customer Name
            </label>

            <input
              id="customerName"
              type="text"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              placeholder="Enter customer name"
            />
          </div>

          <div className="electricity-input">
            <label htmlFor="consumption">
              Consumption (kWh)
            </label>

            <input
              id="consumption"
              type="number"
              min="0"
              value={consumption}
              onChange={(event) => setConsumption(event.target.value)}
              placeholder="Enter consumption"
            />
          </div>

          <div className="electricity-buttons">
            <button
              type="button"
              className="primary-button"
              onClick={calculateBill}
            >
              Calculate Bill
            </button>

            <button
              type="button"
              className="secondary-button"
              onClick={clearForm}
            >
              Clear
            </button>
          </div>

        </div>

        {showResult && (
          <div className="electricity-result">

            <span className="card-kicker">BILL SUMMARY</span>

            <h2>Result</h2>

            <div className="result-row">
              <span>Customer Name</span>
              <strong>{customerName}</strong>
            </div>

            <div className="result-row">
              <span>Consumption</span>
              <strong>{consumption} kWh</strong>
            </div>

            <div className="result-row">
              <span>Rate Applied</span>
              <strong>₱{rate} / kWh</strong>
            </div>

            <div className="result-row total-row">
              <span>Total Bill</span>
              <strong>₱{totalBill.toFixed(2)}</strong>
            </div>

            <div className="result-status">
              <span>Usage Status</span>

              <strong
                className={
                  usageStatus === 'High Electricity Usage'
                    ? 'high-usage'
                    : 'normal-usage'
                }
              >
                {usageStatus}
              </strong>
            </div>

          </div>
        )}

      </div>
    </section>
  )
}

export default ElectricityBillCalculator
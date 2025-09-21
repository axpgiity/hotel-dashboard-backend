const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const summaryData = [
  { title: "Rooms on Books (Tonight)", value: 185 },
  { title: "Today's Occupancy", value: "78%" },
  { title: "Arrivals / Departures", value: "35 / 42" },
  { title: "Today's Room Rev", value: "$25.7K" },
  { title: "MTD RevPAR", value: "$135.50" },
  { title: "MTD GOPPAR", value: "$85.20" },
  { title: "MTD Total Revenue", value: "$310K" },
];

app.get("/summary", (req, res) => {
  res.json(summaryData);
});

const kpiData = {
  kpis: [
    {
      title: "RevPAR",
      value: "$142.30",
      change: "+2.5% vs LY",
      status: "positive",
    },
    {
      title: "GOPPAR",
      value: "$95.80",
      change: "+5.1% vs LY",
      status: "positive",
    },
    {
      title: "ADR",
      value: "$180.12",
      change: "-1.2% vs LY",
      status: "negative",
    },
    {
      title: "Occupancy Rate",
      value: "79.0%",
      change: "+3.0 pts",
      status: "positive",
    },
    {
      title: "RGI (RevPAR Index)",
      value: "105",
      change: "vs CompSet",
      status: "neutral",
    },
  ],
  chart: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Months or periods
    revpar: [120, 130, 135, 142, 140, 150, 155], // Historical values for RevPAR
    adr: [160, 165, 170, 180, 175, 185, 190], // Historical ADR values
    occupancy: [75, 78, 79, 79, 78, 81, 82], // Historical Occupancy Rate values
  },
};

app.get("/revenueProfitability", (req, res) => {
  res.json({
    revenueProfitability: {
      trevpar: 195.5,
      trevparChange: "+4.2%",
      netADR: 155.2,
      netADRChange: "-0.5%",
      roomsDeptProfit: 78.5,
      roomsDeptProfitChange: "+1.5 pts",
      revenueBreakdown: {
        room: 60,
        fnb: 25,
        spa: 10,
        other: 5,
      },
      revenueBySegment: {
        transient: 50,
        corporate: 30,
        group: 15,
        ota: 5,
      },
      revenueByChannel: {
        direct: 40,
        otaGlobal: 30,
        gds: 20,
        brandCom: 10,
      },
    },
  });
});

app.get("/operationalEfficiency", (req, res) => {
  res.json({
    operationalEfficiency: {
      alos: 2.3,
      cpor: 45.6,
      cporChange: "-1.2%",
      lcp: 32.1,
      lcpChange: "+0.8 pts",
      lcor: 35.8,
      lcorChange: "-0.5%",
      energyPerOccRoom: "25 kWh",
      efficiencyTrend: {
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        cporData: [45, 46, 44, 45.5, 45, 46.2],
        lcpData: [33, 32.5, 32, 32.8, 32.1, 32.5],
      },
    },
  });
});

app.get("/guestExperienceReputation", (req, res) => {
  res.json({
    guestExperienceReputation: {
      guestSatisfaction: 8.5,
      nps: 42,
      repeatGuestPercentage: 35,
      repeatGuestChange: "+2.1 pts",
      avgRequestResponseTime: 12,
      responseTimeChange: "-2 min",
      issueResolution: 92,
      resolutionChange: "+1.0 pts",
      reviewVolume: 150,
      reviewVolumeChange: "(Last 30 Days)",
      customerTypeDistribution: {
        labels: ["Air Transport", "Business", "Family Vacation", "Leisure"],
        data: [40, 20, 35, 5],
      },
      guestScoreTrend: {
        labels: ["Q1", "Q2", "Q3", "Q4", "Current Month"],
        scores: [4.0, 4.1, 4.2, 4.3, 4.4],
      },
      aggregatedSatisfaction: {
        score: 4.4,
        scale: "/ 5",
        basedOnReviews: 1250,
      },
      satisfactionByOTA: [
        {
          name: "Expedia",
          score: 4.5,
          reviews: 350,
        },
        {
          name: "Booking.com",
          score: 4.3,
          reviews: 410,
        },
        {
          name: "TripAdvisor",
          score: 4.6,
          reviews: 180,
        },
        {
          name: "Agoda",
          score: 4.4,
          reviews: 150,
        },
        {
          name: "Google",
          score: 4.2,
          reviews: 160,
        },
      ],
    },
  });
});

app.get("/distributionMarketingPerformance", (req, res) => {
  res.json({
    distributionMarketingPerformance: {
      directBookingRatio: 42,
      avgMCPB: 15.7,
      websiteConversion: 3.5,
      rateParityScore: 98,
      bookingLeadTime: 28,
      roomNightsByChannel: {
        labels: ["Direct Online", "OTA", "GDS", "Voice", "Brand.com"],
        data: [30, 40, 10, 5, 15],
      },
    },
  });
});

app.get("/marketBenchmarkingFutureOutlook", (req, res) => {
  res.json({
    marketBenchmarkingFutureOutlook: {
      mpi: 110,
      ari: 98,
      pickupRooms: 150,
      pickupRevenue: "$25K",
      forecastAccuracy: 96,
      paceChartData: {
        labels: ["Next 30 Days", "Next 60 Days", "Next 90 Days"],
        datasets: [
          {
            label: "On The Books (Rms)",
            data: [1200, 2300, 3100],
            backgroundColor: "#3182ce",
            borderRadius: 4,
            barPercentage: 0.6,
          },
          {
            label: "STLY (Rms)",
            data: [1100, 2150, 2900],
            backgroundColor: "#f59e0b",
            borderRadius: 4,
            barPercentage: 0.6,
          },
          {
            label: "Target (Rms)",
            data: [1150, 2250, 3000],
            backgroundColor: "#7f9cf5",
            borderRadius: 4,
            barPercentage: 0.6,
          },
        ],
      },
    },
  });
});

app.get("/competitiveRateSnapshot", (req, res) => {
  res.json({
    competitiveRateSnapshot: {
      leadRateTonight: 175,
      compSetMedianTonight: 183,
      compSetRateRange: "165 - 210",
      rateRankTonight: "3rd Lowest",
      rateParityStatus: "Discrepancy",
      parityDetails: "Direct $10 higher vs OTA Z",
      futureRateIndex: 102,
      futureRateChange: "+2% vs CompSet Median",
      competitorRateChanges: {
        increased: 2,
        avgIncrease: "+$12",
        decreased: 1,
        avgDecrease: "-$8",
      },
      localEvents: [
        { name: "City Music Fest", dates: "May 16-18", demand: "High Demand" },
        { name: "Trade Expo", dates: "May 20-22", demand: "Med. Demand" },
      ],
      futureRateComparison: {
        labels: [
          "Jun 8",
          "Jun 9",
          "Jun 10",
          "Jun 11",
          "Jun 12",
          "Jun 13",
          "Jun 14",
        ],
        yourHotelRates: [175, 180, 190, 195, 185, 180, 178],
        compSetMedianRates: [183, 185, 192, 190, 182, 179, 175],
        yourOTB: ["100%", "63%", "79%", "81%", "67%", "67%", "56%"],
        dates: [
          "5/14/2025",
          "5/15/2025",
          "5/16/2025",
          "5/17/2025",
          "5/18/2025",
          "5/19/2025",
          "5/20/2025",
        ],
        labels: [
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
        ],
        marketDemand: ["98%", "81%", "48%", "62%", "52%", "65%", "73%"],
      },
    },
  });
});

app.get("/kpi", (req, res) => {
  res.json(kpiData);
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

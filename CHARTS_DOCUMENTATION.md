# Charts & Visualization Dashboard - Book Inventory Management System

## Overview

The Charts & Visualization dashboard has been successfully integrated into the State Level Dashboard, providing comprehensive analytics specifically designed for the SCERT book inventory management system. This dashboard offers detailed insights into book distribution, school requisitions, and inventory management across all districts.

## Features Implemented

### 1. **Quick Access Card**

- Added "Charts & Visualization" card in the State Level Dashboard quick actions section
- Uses BarChart3 icon from Lucide React
- Navigates to `/admin/state/charts-visualization`

### 2. **Five Main Visualization Tabs**

#### **Overview Tab**

- **District-wise School Distribution**: Shows number of schools (Primary + Secondary) per district
- **Book Distribution Progress**: Color-coded distribution rates with progress bars
- **Key Metrics Grid**:
  - Total Schools across all districts (3,250 schools)
  - Books Distributed (1.1M+ books)
  - Overall Distribution Rate (average 74.6%)
  - Pending Requisitions (418K books)

#### **Distribution Tab**

- **Monthly Distribution Trend**: 5-month trend showing distributed vs requisitioned books
- **Fulfillment Rate Analysis**: Monthly performance with improvement tracking
- **Book Category Distribution**: Breakdown by class levels:
  - Class I-V (Primary): 35.7%
  - Class VI-VIII (Upper Primary): 27.8%
  - Class IX-X (Secondary): 25.0%
  - Class XI-XII (Higher Secondary): 11.5%

#### **Requisitions Tab**

- **Top Requesting Schools**: Rankings of schools with highest book demands
- **School Categories**: Primary, Secondary, and Higher Secondary breakdown
- **District Requisition Status**: Completion rates and pending requests
- **Requisition Analytics**: Total vs pending requisitions by district

#### **Inventory Tab**

- **Distribution Alert System**: Critical metrics requiring attention:
  - Books in Transit (45K - Warning)
  - Delayed Shipments (12K - Critical)
  - Damaged Books (3.5K - Critical)
  - Returned Books (8.2K - Warning)
  - Lost in Transit (1.2K - Critical)
- **Subject-wise Distribution**: Books distributed by subjects across Primary and Secondary levels

#### **Analytics Tab**

- **Distribution Efficiency**: Multi-metric comparison across districts
- **Books per School Analysis**: Average distribution per institution
- **Performance Insights**: Key trends and recommendations
- **Comparative District Analysis**: Comprehensive performance table

### 3. **Interactive Controls**

- **Period Selection**: Current Month, Last 3 Months, Last 6 Months, Year to Date
- **Metric Selection**: Book Distribution, School Requisitions, Inventory Levels, Distribution Efficiency
- **Real-time Filtering**: Dynamic updates based on selected parameters

### 4. **Book Inventory Management Data Structure**

#### **District Data (8 Districts)**

- West Tripura: 700 schools, 90% distribution rate
- South Tripura: 600 schools, 90% distribution rate
- North Tripura: 550 schools, 85% distribution rate
- Khowai: 300 schools, 82% distribution rate
- Unakoti: 250 schools, 77% distribution rate
- Gomati: 450 schools, 68% distribution rate
- Sepahijala: 400 schools, 45% distribution rate (needs attention)
- Dhalai: 500 schools, 49% distribution rate (needs attention)

#### **Key Metrics Tracked**

- **School Distribution**: Primary vs Secondary school counts
- **Book Allocation**: Total books, distributed books, pending requisitions
- **Distribution Rates**: Performance percentages with color coding
- **Requisition Management**: Top requesting institutions
- **Subject-wise Analysis**: Mathematics, Science, English, Bengali, Social Studies, Hindi
- **Inventory Alerts**: Transit, delays, damages, returns, losses

## Sample Data Included

The dashboard includes realistic sample data based on SCERT book distribution patterns:

- **1.56M+ total books** across all categories
- **3,250 schools** (Primary: 2,250, Secondary: 1,330)
- **Monthly distribution trends** with 96.9% fulfillment rate in May 2025
- **Top 8 requesting schools** with detailed requisition volumes
- **Subject-wise distribution** across 6 major subjects
- **Critical alerts** for inventory management issues

## Future Enhancements for SCERT System

When connecting to the backend, the dashboard can be enhanced with:

1. **Real-time Inventory Tracking**

   - Live book stock levels
   - Automatic reorder alerts
   - Supply chain visibility

2. **Advanced Analytics**

   - Predictive demand forecasting
   - Seasonal distribution patterns
   - Cost per book analysis

3. **School-level Drill-down**

   - Individual school performance
   - Student-to-book ratios
   - Class-wise distribution details

4. **Export & Reporting**

   - PDF distribution reports
   - Excel data exports
   - Automated monthly summaries

5. **Integration Capabilities**
   - School management systems
   - Publisher inventory systems
   - Transportation tracking

## Technical Implementation

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Lucide React (Book inventory specific icons)
- **Routing**: React Router DOM
- **State Management**: React hooks (useState)
- **Progress Visualization**: Custom progress bars and status badges

## File Structure

```
client/pages/admin/
├── StateLevelDashboard.tsx (modified - added Charts & Visualization card)
├── ChartsVisualization.tsx (new - comprehensive book inventory dashboard)
└── ...

client/App.tsx (modified - added route for /admin/state/charts-visualization)
```

## Dashboard Benefits for SCERT

1. **Operational Efficiency**: Quick identification of distribution bottlenecks
2. **Resource Optimization**: Better understanding of demand patterns
3. **Performance Monitoring**: Real-time tracking of distribution KPIs
4. **Strategic Planning**: Data-driven insights for future book procurement
5. **Issue Resolution**: Early warning system for inventory problems

The dashboard is fully responsive and follows existing design patterns while providing comprehensive insights specifically tailored for book inventory management operations.

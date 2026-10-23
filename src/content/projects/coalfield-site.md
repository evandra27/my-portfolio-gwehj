---
title: Invoice Processing Automation
client: Automation
year: '2026'
category: Product
excerpt: End-to-end Attended RPA solution using UiPath Studio to automate invoice data extraction, Word document generation, PDF export, and Excel summary reporting.
description: An enterprise Attended RPA bot built with UiPath Studio leveraging Producer-Consumer architecture to eliminate manual invoice data re-entry, reduce errors to zero, and create automated audit logs.
image:
  src: /images/UiPathCover.png
  alt: UiPath Invoice Processing Automation Preview
  width: 900
  height: 675
images:
  - /images/RPA.png
  - /images/UiPathCover.png
services: ['RPA Development', 'Process Automation', 'Business Analysis']
technologies: ['UiPath Studio', 'Excel Automation', 'Word Automation']
results:
  - value: '80%+'
    label: 'Time saved on monthly invoice processing'
  - value: '100%'
    label: 'Automated Word invoice & PDF generation'
  - value: '0%'
    label: 'Human error rate on manual data entry'
featured: true
order: 3
---

## Project Overview

**PT Nusantara Solusi** is an IT hardware distribution enterprise processing dozens of corporate vendor invoices monthly. Previously, the procurement team manually verified payment statuses, re-entered transaction data into individual Word templates, compiled separate summary spreadsheets, and archived report files. This manual workflow consumed 4–5 hours per month, carried high human-error risks, and lacked scalability.

To address these operational bottlenecks, I designed and developed an **Attended RPA Robot using UiPath Studio** based on the **Producer-Consumer architecture pattern**. The bot automates file validation, dynamic Word & PDF invoice generation, robust exception handling, and automated Excel summary reporting with complete audit trail logging.

---

## Demo Video Automation

Below is the live execution video demonstrating the UiPath Attended Robot running end-to-end: reading Excel data, validating input files, populating Word templates, converting to PDF, and outputting summary reports.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin: 2rem 0; background: #000;">
  <video controls preload="none" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;" poster="/images/RPA.png">
    <source src="/videos/RPAVideo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
*Video 1.0: Live demonstration of UiPath Attended Robot executing the invoice pipeline.*

---

## Responsibilities & Business Analysis

* **Process Bottleneck Identification:** Analyzed manual procurement workflows to define automation boundaries (separating automated robot tasks from human decision checkpoints).
* **Producer-Consumer Architecture:** Designed a decoupled workflow where the **Producer** handles data extraction & queue simulation, and the **Consumer** executes business logic and document generation.
* **Dynamic Document Generation:** Configured automated placeholder replacement (`{{InvoiceNo}}`, `{{Vendor}}`, `{{TotalAmount}}`, etc.) on Word templates and automated PDF conversion.
* **Resilience & Audit Logging:** Implemented `Try-Catch` exception handling to ensure continuous processing during data anomalies, accompanied by structured audit logs.

---

## UiPath Sequence Architecture & Workflow Breakdown

The automation workflow is modularized into 4 primary UiPath sequences:

---

### 1. Main Sequence Architecture (`Main.xaml`)

The **Main Sequence** acts as the central orchestrator controlling the end-to-end execution pipeline, variable scope management, and global audit logging.

![UiPath Main Sequence Overview](/images/MainSequence.png)
*Figure 1.0: Main Orchestrator sequence managing workflow execution order, row-level status verification, and audit trail logging.*

**Key Technical Activities & Control Flow:**
1. **Environment Setup & Audit Initialization (`Multiple Assign`):** Configures `auditLogPath` dynamically using `Directory.GetCurrentDirectory()` to store runtime execution logs.
2. **Data Ingestion (`Invoke Workflow File: ReadInvoiceData.xaml`):** Invokes the Producer workflow passing 3 dictionary arguments to read input Excel data and return the `invoiceData` DataTable and `totalRecords` count.
3. **Data Validation Guard (`If: totalRecords > 0`):** Proceeds with batch execution if valid records are present, or logs a critical error message if input data is missing/empty.
4. **Row-Level Processing Loop (`For Each Row in Data Table`):** Iterates through each record in `invoiceData` and invokes `ProcessInvoice.xaml` to execute business logic, Word generation, and PDF conversion per transaction.
5. **Dynamic Audit Trail Logging (`If: rowSuccess`):** Checks the boolean return flag (`rowSuccess`) from `ProcessInvoice.xaml` to increment `successCount` or `failCount`, appending `[SUCCESS]` or `[FAILED]` status entries to `auditLogPath`.
6. **Post-Processing & Summary Report (`WriteSummaryReport.xaml`):** Logs total record counts, appends an `=== SUMMARY ===` header into the audit log text file, and invokes `WriteSummaryReport.xaml` to generate the final consolidated Excel summary.

---

### 2. ReadInvoiceData Sequence Architecture (`ReadInvoiceData.xaml`)

The **ReadInvoiceData** sequence functions as the Producer data ingestion layer. It validates the input Excel source path, extracts raw invoice transactions into a DataTable structure, and safely handles missing or corrupted source files.

![UiPath ReadInvoiceData Sequence](/images/ReadInvoice.png)
*Figure 2.0: ReadInvoiceData workflow performing modern Excel File scope read operations, record counting, and Exception handling.*

**Key Technical Activities & Control Flow:**
1. **Excel Scope Ingestion (`Use Excel File` & `Read Range`):** Leverages modern UiPath Excel integration targeting `in_FilePath` with `Create if not exists = Off` and `Save changes = Off` to ensure read-only operations, reading `Excel.Sheet("Sheet1")` with headers into `out_InvoiceData`.
2. **Dataset Auditing (`Assign` & `Log Message`):** Calculates total extracted record rows (`out_TotalRecords = out_InvoiceData.Rows.Count`) and logs an informational audit entry.
3. **Fault Tolerance Guard (`Try Catch` - `System.Exception`):** Intercepts missing file errors or IO read exceptions, logging an explicit error message and setting `out_TotalRecords = 0` to notify the Main Orchestrator sequence to halt downstream execution gracefully without crashing the robot.

---

### 3. ProcessInvoice Sequence Architecture (`ProcessInvoice.xaml`)

The **ProcessInvoice** sequence serves as the core Consumer engine. It handles item-level business logic, performs mathematical calculations, replaces dynamic Word placeholders, exports PDF documents, and manages runtime exception handling.

![UiPath ProcessInvoice Sequence](/images/ProcessInvoice.png)
*Figure 3.0: ProcessInvoice sequence detailing data parsing, Word template placeholder replacement, PDF conversion, and Try-Catch error mapping.*

**Key Technical Activities & Execution Steps:**
1. **Transaction Data Parsing (`Multiple Assign`):** Extracts individual columns from `in_InvoiceRow` into local string variables (`invoiceNo`, `vendor`, `item`, `qty`, `unitPrice`, `status`) and calculates total transaction amounts dynamically (`out_TotalAmount = CDbl(Qty) * CDbl(UnitPrice)`).
2. **Template Provisioning (`Copy File`):** Dynamically constructs output file pathing (`in_OutputFolder + "\Invoice_" + invoiceNo + ".docx"`) and copies the master `Invoice_Template.docx` file into a new transaction-specific file with `Overwrite = True`.
3. **Dynamic Placeholder Replacement (`Word Application Scope`):** Opens the copied Word file and uses sequential `Replace Text` activities to inject real-time invoice parameters into template placeholders (`{{InvoiceNo}}`, `{{Vendor}}`, `{{Item}}`, `{{Qty}}`, `{{UnitPrice}}`, `{{TotalAmount}}`, `{{Status}}`, `{{TanggalCetak}}`).
4. **Automated PDF Export (`Save Document as PDF`):** Converts the populated Word document into a PDF file saved in the output directory.
5. **Robust Exception Handling (`Try Catch`):** Assigns `out_IsSuccess = True` upon successful execution, or captures runtime failures in the Catch block without breaking batch iteration (`out_IsSuccess = False`, `out_ErrorMessage = exception.Message`).

---

### 4. WriteSummaryReport Sequence Architecture (`WriteSummaryReport.xaml`)

The **WriteSummaryReport** sequence consolidates processed transaction records, computes dataset aggregates using LINQ expressions, appends summary totals, and exports the final execution report.

![UiPath WriteSummaryReport Sequence](/images/WriteSummaryReport.png)
*Figure 4.0: WriteSummaryReport workflow executing DataTable cloning, LINQ aggregation, grand total injection, and text report writing.*

**Key Technical Activities & Control Flow:**
1. **Environment & Schema Initialization (`Assign`):** Constructs timestamped output report paths (`reportPath = in_OutputFolder + "\Summary_Report_..."`), clones input data structure schema using `summaryTable = in_InvoiceData.Clone`, and initializes `grandTotal = 0`.
2. **Row Data Population (`For Each Row in Data Table`):** Iterates through `in_InvoiceData` and executes `Add Data Row` to copy validated transaction columns into `summaryTable`.
3. **LINQ Aggregate Calculation (`Assign`):** Dynamically computes dataset sums across all processed invoices using a LINQ query: `grandTotal = in_InvoiceData.AsEnumerable().Sum(Function(r) Convert.ToDouble(r("TotalAmount")))`.
4. **Summary Row Injection (`Add Data Row`):** Appends an explicit total row at the bottom of `summaryTable` containing alignment padding and formatted grand total values: `{"", "", "", "", "GRAND TOTAL:", grandTotal}`.
5. **Report Serialization & Export (`Output Data Table as Text` & `Write Text File`):** Converts the structured `summaryTable` DataTable into a formatted text string (`txtLaporan`) and exports the final report to disk using `Write Text File` targeting `reportPath` for finance audit review.

---

## Input Assets & Template Architecture

The automation pipeline relies on two standardized input assets stored within the `Input/` directory to ensure consistent document formatting and data parsing:

---

<!-- ### 1. Raw Invoice Dataset (`invoice_data.xlsx`)

The source data file containing raw vendor transactions ingested by `ReadInvoiceData.xaml`.

![Raw Invoice Excel Dataset](/images/InvoiceRawData.png)
*Figure 5.0: Source dataset structure containing transaction IDs, vendor names, quantities, unit prices, and payment status flags.*

---

### 2. Dynamic Word Template (`Invoice_Template.docx`)

A standardized corporate document layout using double-curly brackets (`{{Placeholder}}`). During the `ProcessInvoice.xaml` execution, the bot copies this file per row and replaces the key parameters before compiling Word and PDF files.

![Word Invoice Template](/images/InvoiceTemplate.png)
*Figure 5.1: Master Word template with mustache placeholders for dynamic text injection.*

---

## Output Deliverables & Execution Artifacts

Upon successful execution of the UiPath workflow, the bot generates structured output artifacts partitioned across dedicated project directories (`Logs/` and `Output/`) for operational auditing, compliance, and reporting.

---

### 1. Audit Trail Logging (`Logs/AuditLog.txt`)

Tracks row-level execution statuses in real-time, logging success/failure flags alongside total batch execution metrics.

![Execution Audit Log](/images/AuditLogInvoice.png)
*Figure 6.0: Audit log recording item-level execution metrics and batch totals.*

* **Row-Level Format:** `[SUCCESS] INV-001 - Total: 62500000`
* **Batch Summary Line:** `=== SUMMARY === Total: 5 | Sukses: 5 | Gagal: 0`

---

### 2. Generated Invoice Documents (`Output/`)

For every transaction row, the robot creates a paired Word document (`.docx`) and an archived PDF (`.pdf`) using dynamic file naming conventions (`Invoice_{InvoiceNo}`).

![Generated Invoice Files Folder](/images/Output.png)
*Figure 6.1: Output directory containing paired Word and PDF invoice files generated per transaction.*

![Populated Invoice Document](/images/OutputInvoice.png)
*Figure 6.2: Sample generated invoice document for INV-001 with populated vendor, item, unit price, formatted total, and system date.*

---

### 3. Consolidated Summary Report (`Output/Summary_Report_YYYYMMDD.csv`)

Aggregates all processed transactions into a single spreadsheet report featuring structured column data and dataset calculations for Finance team review.

![Excel Summary Report](/images/OutputSummary.png)
*Figure 6.3: Consolidated summary report displaying itemized transaction details and calculated Grand Total (Rp 108,800,000).* -->
// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

// Translation resources
const resources = {
  en: {
    translation: {
      // Navbar
      nav_home: "Home",
      nav_about: "About",
      nav_apply: "Apply",
      nav_work: "Projects",
      nav_contact: "Contact",
      // Hero Section
      hero_title: "WinFo",
      hero_subtitle: "Empowering you ",
      hero_subtitle_2: "unlock boundless potential!",
      hero_cta: "View Our Projects",
      hero_slogan_heading: "Become a Successful Enterprise",
      hero_slogan: "Zero Hidden Costs, Zero Guesswork",
      hero_slogan_2: "Your Vision, Our Expertise.",
      hero_slogan_3: "Partner with WinFo:",
      hero_slogan_4: "Streamline Your Hong Kong Business Journey",
      hero_slogan_5: "While We Secure Your Success.",
      // About Section
      about_title: "About Us",
      about_text1:
        "WinFo is a professional consulting team combining mainland and Hong Kong financial experts, specializing in business development, transformation and upgrading, and cross-border expansion. We firmly believe that a company's success stems not only from high-quality products and services, but also from precise strategic planning, resource integration, and capital utilization capabilities.",
      about_text2:
        "The founding team brings together senior bankers, cross-border trade experts, and tech entrepreneurs, offering three core capabilities: \n" +
        "✅ Strategic Implementation: Bridging policy and cultural gaps to ensure smooth execution of plans\n" +
        "✅ Funding Matching: Connecting subsidy, investment, and financing resources to accelerate capital deployment\n" +
        "✅ Resource Integration: Streamlining decision-making and execution processes to enhance cross-border collaboration efficiency and outcomes\n" +
        "\n" +
        "From helping SMEs comply with export regulations to incubating technology companies for cross-border expansion, we leverage our financial expertise and practical experience to accelerate your entrepreneurial journey and save you valuable time.",
      about_tag_1: "Financial Support",
      about_tag_2: "Market Development",
      about_tag_3: "Business Growth",
      // Work Section
      work_title: "Selected Projects",
      work_project: "Project {{number}}",
      work_category: "Category",
      work_learn_more: "Learn More",
      work_bud: "BUD Project",
      work_hkstp: "Settled in Hong Kong Science Park",
      work_hkstp_1: "Settled",
      work_hkstp_2: "Hong Kong Science Park",
      work_index: "Settled in Hong Kong",
      work_bank: "Bank account registration/company account",
      work_subsidy: "Subsidies for various innovation parks from Mainland",
      work_ccp: "Audit Report of a Licensed Accountant",
      work_listing: "Listed Company Maintenance",
      work_ccp_desc:
        "Registering a Hong Kong company is easy\n\nAudit Report of a Licensed Accountant\n\nHelping you achieve great success in Hong Kong",
      work_bank_desc:
        "100% success: Mainland ID for setting up physical bank company/personal accounts\n\nEstablishment of Hong Kong companies\n\nHong Kong company annual audit and tax filing",
      work_subsidy_section1_title: "Talent Living Allowance",
      work_subsidy_section1_item1: "High-end talent subsidy",
      work_subsidy_section1_item2: "Education-based subsidy",
      work_subsidy_section1_item3:
        "Hong Kong and Macao youth entrepreneurship support",
      work_subsidy_section2_title:
        'Dream Factory office/housing "one yuan rent" benefit',
      work_subsidy_section3_title: '"1:1 Policy" Support Package',
      work_subsidy_section3_item1_title: "Enterprise R&D Subsidy",
      work_subsidy_section3_item1_details:
        "Projects that have received support from the Hong Kong government or universities can apply for 1:1 cash subsidies from the mainland",
      work_subsidy_section3_item2_title:
        "Entrepreneurship Loan Interest Subsidy",
      work_subsidy_section3_item2_details:
        "Hong Kong and Macao youth entrepreneurship can apply for loans, with the government bearing part of the interest. The maximum enterprise loan is 5 million yuan, with an interest subsidy period of up to 3 years",
      work_subsidy_section3_item3_title: "Tax Coordination Benefits",
      work_subsidy_section3_item3_details:
        "Guangdong, Hong Kong and Macao promote tax rule coordination, such as cross-border data sharing, smart taxation systems, reducing enterprise compliance costs",
      // Collaborator Section
      collaborator_title: "Our Trusted Collaborator",
      collaborator_GBA: "GBA Taxi",
      collaborator_GBA_text:
        "Reliable Cross-Border Taxi Service - from Hong Kong to GBA Cities",
      // Contact Section
      contact_title: "Get in Touch",
      contact_name: "Name",
      contact_email: "Email",
      contact_subject: "Subject",
      contact_message: "Message",
      contact_submit: "Send Message",
      contact_info: "Contact Information",
      contact_info_address:
        "Rm122, Liven House, 61-63 King Yip Street, Kwun Tong, Kowloon, Hong Kong",
      contact_info_address_2: "Kwun Tong, Kowloon, Hong Kong",
      contact_info_phone: "+852 6651 5286",
      contact_info_phone_2: "+86 15622232717",
      contact_info_email: "winfobizsolution@gmail.com",
      contact_info_name: "",
      contact_info_name_2: "",
      contact_info_company_name: "Winfo Business Solutions Ltd.",
      contact_info_company_name_2: "盈豐商業有限公司",
      contact_business_hour: "Business Hours",
      contact_business_hour_1: "Monday - Friday: 9:00 AM - 6:00 PM",
      contact_business_hour_2: "Weekend & Public Holiday: Closed",
      // Footer
      footer_copyright:
        "© {{year}} Winfo Business Solutions Ltd.. All rights reserved.",
      footer_instagram: "Instagram",
      footer_twitter: "Twitter",
      footer_linkedin: "LinkedIn",
      footer_collaborator: "Our Collaborator",
      // HKSTP Page
      hkstp_description:
        "Empowering startups at every stage with funding, mentorship, and resources to accelerate growth",
      index_description:
        "Starting businesss in Hong Kong and Planning to audit your company",
      hkstp_description_2: "Explore Programs",
      hkstp_program_title: "Choose Your Program",
      hkstp_program_text:
        "Pick the right tier for your startup's current stage and growth needs. From early-stage ideas to established companies, we offer tailored support to help you succeed.",
      hkstp_apply_title: "Apply to HKSTP Program",
      hkstp_apply_name: "Founder Name*",
      hkstp_apply_name_2: "Full Name",
      hkstp_apply_name_3: "Company/Project Name*",
      hkstp_apply_name_4: "Company/Project Name",
      hkstp_apply_email: "Email Address*",
      hkstp_apply_email_2: "you@example.com",
      hkstp_apply_phone: "Phone Number*",
      hkstp_apply_phone_2: "+852 1234 5678",
      hkstp_apply_description: "Project Description*",
      hkstp_apply_description_2:
        "Please describe yur business, technology, target market, and current progress...",
      hkstp_apply_submit: "Submit Application",
      ordinary: "Special",
      luxury: "Luxury",
      index_title1: "Annual Examination for Hong Kong Company (1 Year)",
      index_subtitle1:
        "Renewal of the latest annual business registration certificate (government fee)",
      index_subtitle2: "Appointment of company secretary",
      index_subtitle3: "Provision of company registered address",
      index_subtitle4:
        "Submission of updated annual declaration form (government fee)",
      index_subtitle5: "Secretary licensed agent",
      index_subtitle6:
        "Complete audit review and issue accountant's audit report",
      index_title2: "Accounting Audit Profit Tax Declaration (1 Year)",
      index_subtitle7:
        "Audit report company business analysis, issue audit opinion",
      index_subtitle8: "Fill in profit tax declaration",
      index_subtitle9:
        "Calculate profit tax, submit tax information to the tax bureau",
      index_subtitle10: "Review assessment/guidance on tax payment",
      index_subtitle11: "Preparation and transmission of tax audit files",
      index_title3: "Personal Income Tax Service (1 Year)",
      index_subtitle12: "Accounting consultation service",
      index_subtitle13: "Act as personal tax representative",
      index_subtitle14: "Fill in individual tax returns",
      index_subtitle15: "Submit to the tax bureau and declare",
      index_subtitle16: "Guidance of tax matters and process tax refunds",
      index_title4: " Mandatory Provident Fund (MPF) Service (1 Year)",
      index_subtitle17: "Planning of MPF payment nodes",
      index_subtitle18:
        "Assistance in opening company and personal MPF accounts",
      index_subtitle19: "Assistance in monthly MPF contributions",
      index_subtitle20: "Follow-up contribution record service",
      index_title5: "Hong Kong Company Information Change Service ( 1 Option )",
      index_title5_1: "Hong Kong Company Information Change Service ( ",
      index_title5_2: " Options )",
      index_subtitle21: "Hong Kong company branch registration",
      index_subtitle22: "Hong Kong company name change",
      index_subtitle23: "Hong Kong company share transfer/increase capital",
      index_subtitle24: "Hong Kong company business scope change",
      index_subtitle25: "Hong Kong company director change",
      index_subtitle26: "Hong Kong company change of company secretary",
      index_subtitle27: "Hong Kong company deregistration",
      index_subtitle28:
        "Personal opening of Hong Kong personal account service (free gift)",
      index_title6: "Add-on Services (Price to be determined)",
      index_subtitle29:
        "Hong Kong subsidy application service (BUD/EMF/Youth Employment Subsidy, etc.)",
      index_subtitle30:
        "Hong Kong Identity Card application and renewal service",
      index_subtitle31: "Hong Kong office leasing service",
      index_remark1:
        "* Prices are for reference only and may vary based on company size and required service scope",
      index_title7: "Luxury Services",
      index_subtitle32: "Hong Kong company registration",
      index_subtitle33:
        "Hong Kong company opening of public accounts (non-virtual offshore banks)",
      luxury_service: "Luxury Service",
      special_service_1: "Special Service",
      special_service_2: "(Revenue within HKD 2 million)",

      // Added by Matt from here
      // Program Stages
      stage_ideation: "Ideation",
      stage_incubation: "Incubation",
      stage_acceleration: "Acceleration",
      stage_elite: "Elite",

      // Program Details (Summary)
      funding_up_to_table: "Funding up",
      duration_ideation: "1-year program",
      desc_ideation1: "For early-stage ideas",
      desc_ideation2: "Mentorship support",
      desc_ideation3: "Business workshops",

      duration_incubation: "3-year program",
      desc_incubation1: "For startups with MVP",
      desc_incubation2: "Office space provided",
      desc_incubation3: "Market validation support",

      duration_acceleration: "2-year program",
      desc_acceleration1: "Seed or Series A startups",
      desc_acceleration2: "Investor network access",
      desc_acceleration3: "Scaling strategy support",

      duration_elite: "3-year program",
      desc_elite1: "Series B+ companies",
      desc_elite2: "Global expansion support",
      desc_elite3: "Executive leadership coaching",

      amount_ideation: "HK$100,000",
      amount_incubation: "HK$1.29M",
      amount_acceleration: "HK$4.8M",
      amount_elite: "HK$21.5M",
      hide_program: "Hide program comparison",
      view_detailed_program: "View detailed program comparison",

      // Apply Buttons
      apply_now: "Apply Now",
      // Comparison Table
      table_funding: "Funding",
      table_duration: "Duration",
      table_timeline: "Application Timeline",
      table_support: "Support",
      table_incorporation: "Years of incorporation",
      table_min_employees: "Minimum employees",
      table_valuation_revenue: "Valuation & Revenue",

      jan: "Jan, May, Sep",
      year_round: "Year round",
      by_invit: "By Invitation",
      how_to_apply_reminder:
        "The above is the application process for HKSTP Incubation Program. We will assist you in passing the interview.",

      // Application Process
      apply_title: "How to Apply",
      apply_description:
        "Our streamlined application process is designed to identify and support the most promising startups",
      submit_application_title: "Submit Application",
      submit_application_description:
        "Complete the online application form with your business plan, team details, and funding needs.",
      initial_screening_title: "Initial Screening",
      initial_screening_description:
        "Our team reviews applications to ensure alignment with program requirements and potential for success.",
      panel_interview_title: "Panel Interview",
      panel_interview_description:
        "Selected applicants pitch to our panel of experts, investors, and industry professionals.",
      onboarding_title: "Onboarding",
      onboarding_description:
        "Successful applicants receive funding, resources, and begin their STP program journey.",

      contact_us:
        "If you are interested in applying for the HKSTP's Incubation Programme or have any questions, please feel free to contact us. Our professional team can assist you with the entire application process to expedite approval.",

      service_title1:
        "Hong Kong Company Registration and Bank Account Opening Services",
      service_title2: "",

      service_description:
        "From registration to account opening, we help you steadily develop your business in Hong Kong.",
      service_highlight_1: "Applicable to Mainland residents",
      service_highlight_2:
        "100% success rate in opening Hong Kong physical bank accounts for companies/individuals",
      service_highlight_3:
        "Transparent services with no hidden fees, clear processes, and one-stop service",
      servicet12: "Company registration and bank account opening services",
      // Section Titles
      service_overview: "Service Overview",
      standard_services: "Standard Services",
      premium_services: "Premium Services",
      bonus: "Bonus: Opening a Hong Kong Personal Account",
      moredetails: "More Details",
      // Standard Service Items
      standard_item_1:
        "Company Information Change Services (including one item)",
      standard_item_2: "• Hong Kong Company Branch Registration",
      standard_item_3: "• Hong Kong Company Name Change",
      standard_item_4: "• Hong Kong Company Share Transfer/Capital Increase",
      standard_item_5: "• Hong Kong Company Business Scope Change",
      standard_item_6: "• Hong Kong Company Director Change",
      standard_item_7: "• Hong Kong Company Change of Legal Secretary",
      standard_item_8: "• Hong Kong Company Deregistration",

      // Premium Service Items
      premium_services_title: "Premium Services",
      premium_item_1: "Company Setup and Account Opening Services",
      premium_item_2: "Hong Kong Company Registration",
      premium_item_3:
        "Hong Kong Company Opening of a Corporate Account (Non-Virtual Offshore Bank)",
      premium_item_4:
        "Company Information Change Services (including three items)",
      premium_item_5:
        "Value-Added Services (prices determined based on circumstances)",
      premium_item_6: "Hong Kong Identity Card Application and Renewal",
      premium_item_7: "Office Leasing Arrangements",

      contact_whatsapp: "Get Solutions Now",
      contact_phone: "+852 6651 5286",
      year: "year",
      years: "years",
      Subsidies:
        "The Guangdong-Hong Kong-Macao Greater Bay Area offers Hong Kong and Macao youth and start-ups a range of subsidies, including subsidies for the salaries of innovation and technology talent, start-up funds of up to HK$600,000, “one-dollar rent” offices and talent housing, 1:1 R&D subsidies, and tax incentives to support innovation and regional integration in parks such as Qianhai.",
      // Program Comparison Table
      duration: "Duration",
      application_timeline: "Application Timeline",
      support: "Support",
      support_all_programs_include:
        "All programs include the following support services:",
      talent_mentorship_programmes: "Talent & mentorship programmes",
      startup_networking_events: "Startup networking events",
      business_training_workshops: "Business training workshops",
      business_matching_opportunities: "Business matching opportunities",
      corporate_partnership_programmes: "Corporate partnership programmes",
      fundraising_opportunities: "Fundraising opportunities",
      years_of_incorporation: "Years of incorporation",
      years_of_incorporation_note:
        "Including parent and holding company (if any)",
      incorporation_individual_team_no_limitation:
        "Individual or Team (No limitation)",
      incorporation_registered_company_2_years_less:
        "Registered company (2 years old or less)",
      incorporation_non_ipo_company: "Non-IPO company",
      incorporation_hk_registered_company: "HK registered company",
      incorporation_general_startups_5_years_less:
        "General startups 5 years or less",
      incorporation_2_years_or_more: "(2 years old or more)",
      minimum_employees: "Minimum employees",
      employees_at_least_1_staff: "At least 1 full-time or part-time staff",
      employees_2_fulltime_onsite: "2 full-time staffs working on site",
      employees_min_50_percent_technical: "(min. 50% technical staff)",
      employees_worldwide_max_100:
        "Employees worldwide no more than 100 staffs",
      employees_at_least_1_fulltime_onsite:
        "At least 1 full-time Staff working on site",
      employees_worldwide_min_30:
        "Employees worldwide no less than 30 staffs (min. 50% technical staff)",
      valuation_revenue: "Valuation & Revenue",
      na: "N/A",
      company_has_prototype_mvp:
        "(The company has a prototype or MVP which is being market validated in principle)",
      valuation_seed_series_a: "Valuation: Seed or Series A",
      revenue_hkd_20million: "Revenue: ~ HKD 20million",
      valuation_series_b_above: "Valuation: Series B or above",
      revenue_hkd_50million: "Revenue: ~ HKD 50million",
      // ENG
      service_note:
        "Our company registration and bank account opening services also cover several Southeast Asian countries, including Thailand, Indonesia, and other ASEAN regions. Feel free to contact us for any inquiries.",
      sub_1:
        "For Hong Kong and Macao youth (under 45 years of age) who first secured employment in the Qianhai Cooperation Zone after July 1, 2021,",
      bud_1: "Background and Objectives",
      hero_build_beyond_borders: "Build Beyond Borders",
      hero_connect_integrate_expand: "Connect. Integrate. Expand.",
      // Hero Section
      bud_service_title1:
        "The Dedicated Fund on Branding, Upgrading and Domestic Sales (BUD Fund) was launched by the Hong Kong Special Administrative Region Government in June 2012 to assist non-listed Hong Kong enterprises in enhancing brand image, optimizing business models, and expanding into Mainland China and other Free Trade Agreement (FTA) or Investment Promotion and Protection Agreement (IPA) markets. Managed by the Hong Kong Productivity Council (HKPC), the scheme helps businesses capitalize on opportunities from national development plans (e.g., the 12th and 14th Five-Year Plans) to boost competitiveness in target markets.",
      bud_service_title2: "Domestic Sales (BUD Fund)",
      bud_service_description:
        "The Dedicated Fund on Branding, Upgrading and Domestic Sales (BUD Fund) was launched by the Hong Kong Special Administrative Region Government in June 2012 to assist non-listed Hong Kong enterprises in enhancing brand image, optimizing business models, and expanding into Mainland China and other Free Trade Agreement (FTA) or Investment Promotion and Protection Agreement (IPA) markets. Managed by the Hong Kong Productivity Council (HKPC), the scheme helps businesses capitalize on opportunities from national development plans (e.g., the 12th and 14th Five-Year Plans) to boost competitiveness in target markets.",

      // Program Tiers
      bud_service_overview: "The main objectives of the scheme include:",
      bud_service_highlight_1:
        "Brand Development: Enhance brand awareness, design, management, and sustainability.",
      bud_service_highlight_2:
        "Business Upgrading: Promote business model innovation, product technology upgrades, and green transformation.",
      bud_service_highlight_3:
        'Market Expansion: Develop market strategies, establish business units, and conduct marketing and relationship management, particularly targeting Mainland China and the Association of Southeast Asian Nation ("ASEAN") markets.',

      bud_premium_item_5:
        "The BUD Fund provides the following funding arrangements:",
      bud_premium_item_6:
        "Funding Ratio: The government funds up to 25% of project costs, with enterprises contributing at least 75% in cash.",
      bud_premium_item_7:
        "Cumulative funding limit per enterprise: HK$7 million, covering up to 70 approved projects.",
      bud_premium_item_8:
        '"Easy BUD" projects: Up to HK$100,000 per project, to be completed within 12 months.',
      bud_premium_item_9:
        '"E-commerce Easy" projects: Up to HK$800,000 per project, with a cumulative cap of HK$1 million (counted toward the HK$7 million total cap).',

      // Funding Scope
      funding_scope_title:
        "Funding Scope includes, but is not limited to, the following project types:",
      funding_scope_ad:
        "Advertising in target markets (up to 6 months of operational costs).",
      funding_scope_exhibitions:
        "Participation in exhibitions (including booth fees, design, setup, and related travel/accommodation expenses).",
      funding_scope_patent:
        "Patent/trademark registration (up to HK$600,000 per enterprise).",
      funding_scope_testing: "Product or service testing and certification.",
      funding_scope_website:
        "Development or optimization of websites and mobile applications.",
      funding_scope_promo:
        "Production of promotional materials (e.g., flyers, posters, catalogs).",
      funding_scope_online_sales:
        "Establishment of online sales platforms (up to 6 months of operational costs).",
      funding_scope_audit: "External audit fees (up to HK$5,000 per project).",
      // Required Documents
      documents_title: "Required Documents for Application",
      documents_company_subtitle: "Hong Kong Winfo Business Consultant",
      documents_hk_company_docs: "Hong Kong Company Documents",
      documents_target_market_docs: "Target Market Company Documents",
      documents_other_docs: "Other Documents",
      documents_required_note: "Required Documents",

      // Hong Kong Company Documents
      documents_hk_business_registration: "Business Registration (BR)",
      documents_hk_certificate_incorporation:
        "Certificate of Incorporation (CI)",
      documents_hk_annual_return: "Annual Return (NAR1)",
      documents_hk_id_copy: "Major Shareholder (>30%) ID Copy",
      documents_hk_mpf_statement: "Recent 3 Months MPF Contribution Proof",
      documents_hk_audit_report: "Recent Annual Audit Report",
      documents_hk_trademark: "Hong Kong Registered Trademark (if any)",
      documents_hk_business_proof_title:
        "Substantial Business Proof (Recent 3-5 documents)",
      documents_hk_sales_invoice:
        "Recent 3 Months Hong Kong Sales Invoice (1 per month)",
      documents_hk_contract: "Business Contract",
      documents_hk_payment: "Payment Records",
      documents_hk_custom_declaration: "Custom Declaration",
      documents_hk_rental_agreement: "Stamped Rental Agreement",

      // Application Guide
      guide_title: "How to Choose Different Application Schemes",
      guide_company_subtitle: "Hong Kong Winfo Business Consultant",

      // Key Points
      guide_point_1: "Consider the company's planned budget and project scale",
      guide_point_2: "Project implementation content",
      guide_point_3:
        "Whether the application project requires assistance from the applicant company's mainland/local business units",

      // Table Headers
      guide_considerations: "Key Considerations",
      guide_recommendations: "Recommended Solutions",

      // Table Content - Considerations
      guide_budget_over_20w: "Total project budget exceeds HK$200,000",
      guide_project_over_12_months:
        "Project implementation period exceeds 12 months",
      guide_need_mainland_assistance:
        "Requires mainland business unit assistance for project implementation",
      guide_ecommerce_larger_budget:
        "For e-commerce development with greater budget flexibility (no proportional limit)",
      guide_no_new_business_expansion:
        "Measures do not involve new business units, staff recruitment, machinery, template budgets, etc.",
      guide_simple_short_term_measures:
        "Application involves only simple and short-term measures (exhibitions, trademark registration, etc.)",
      guide_hope_fast_approval: "Hope for quick approval results",

      // Table Content - Recommendations
      guide_recommend_general_ecommerce: "General Application/E-commerce Easy",
      guide_recommend_ecommerce: "E-commerce Easy",
      guide_recommend_ecommerce_application: "E-commerce Easy/Easy BUD",
      guide_recommend_application: "Easy BUD",

      // Target Market Company Documents
      documents_target_business_license: "Local Business License",
      documents_target_capital_info: "Shareholder Capital Information",
      documents_target_audit_report: "Local Audit Report",
      documents_target_product_certification: "Local Product Certification",
      documents_target_employee_count:
        "Local Employee Count (Not required for E-commerce)",
      documents_target_financial_report:
        "Local Recent Annual Audit Report/Revenue",
      documents_target_trademark: "Local Registered Trademark",
      documents_target_business_proof_title:
        "Local Substantial Business Proof (Recent 2-3 documents)",
      documents_target_sales_invoice_vat: "Sales Invoice/VAT",
      documents_target_contract: "Business Contract",
      documents_target_payment: "Payment Records",
      documents_target_custom_declaration: "Custom Declaration",

      // Other Documents
      documents_other_project_leader_info:
        "Project Coordinator [with MPF] (Chinese & English name, position, email, phone, fax)",
      documents_other_deputy_leader_info:
        "Deputy Project Coordinator [with MPF] (Chinese & English name, position, email, phone, fax)",
      documents_other_company_website: "Company Website",
      documents_other_company_photos: "5 Company Photos",
      documents_other_photo_requirements:
        "(1 clear signage photo, 1 lobby nameplate photo)",
      documents_other_agency_authorization: "Agency Brand Authorization",
      documents_other_promotional_materials:
        "Company business/product/service promotional materials/printed materials",
      documents_other_industry_association:
        "Related Industry Association Membership",
      documents_other_international_certification:
        "International Certification (Product quality certificates/certifications/service licenses)",
      documents_other_certification_requirements:
        "Please confirm if the company has products sold locally, whether local mandatory testing reports or licenses are required. If so, please provide relevant certification documents held by the company",
      bud_funding_details: "Funding Details",
      bud_funding_scope: "Funding Scope",
      bud_funding_regions: "Eligible Regions",
      bud_funding_comparison: "Funding Scheme Comparison Table",
      bud_scheme_type: "Scheme Type",
      bud_funding_cap: "Funding Cap",
      bud_project_duration: "Project Duration",
      bud_main_purpose: "Main Purpose",
      bud_region_quantity: "Number of Eligible Regions",
      bud_general_application: "General Application",
      bud_amount_1m: "HK$1 million",
      bud_month: "Month",
      bud_months: "Months",
      bud_general_purpose:
        "Brand development, business upgrading, and market expansion",
      bud_easy_bud: "Easy BUD",
      bud_amount_100k: "HK$100,000",
      bud_easy_bud_description:
        "Small-scale projects with a simplified application process",
      bud_ecommerce_easy: "E-commerce Easy",
      bud_amount_800k: "HK$800,000",
      bud_ecommerce_easy_description:
        "E-commerce projects covering Mainland China and ASEAN markets",
      bud_notes: "Notes:",
      bud_eligibility: "Eligibility Criteria",
      bud_application_process: "Application Process",
      bud_required_documents: "Required Documents for Application",
      bud_how_to_choose: "How to Choose Different Application Schemes",
      bud_compliance: "Compliance Requirements",
      // Eligible Regions
      regions_title: "Eligible Regions",
      regions_ecommerce_easy:
        "E-commerce Easy is limited to Mainland China and the ten ASEAN countries (including Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, the Philippines, Singapore, Thailand, and Vietnam).",
      regions_general_easy:
        "The eligible regions for General Application and Easy BUD under Free Trade Agreements (FTA) and Investment Promotion and Protection Agreements (IPPA) signed with Hong Kong include:",
      regions_asean1: "The Ten ASEAN Member States",
      regions_asean2:
        "Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, the Philippines, Singapore, Thailand, Vietnam",
      regions_other_asia1: "Other Asian Economies",
      regions_other_asia2:
        "Japan, South Korea, Kuwait, Macao, United Arab Emirates, Bahrain",
      regions_europe1: "Europe",
      regions_europe2:
        "Austria, Belgium-Luxembourg Economic Union, Denmark, Four EFTA Countries (Iceland, Liechtenstein, Norway, and Switzerland), Finland, France, Georgia, Germany, Italy, Netherlands, Sweden, United Kingdom, Turkey",
      regions_americas_oceania1: "Americas and Oceania",
      regions_americas_oceania2:
        "Australia, Canada, Chile, Mexico, New Zealand",
      new_audit_services_title:
        "Professional Licensed Accountant Audit and Tax Filing Services",
      new_audit_services_title1: "Audit and Tax Filing Services",

      new_audit_services_subtitle:
        "Professional audit reports issued by licensed accountants help companies comply with tax regulations, apply for subsidies, enhance their credibility, and improve their financing capabilities.",
      new_audit_services_description:
        "We provide Hong Kong businesses with one-stop professional audit, tax filing, and secretarial services, featuring transparent pricing and a simple process to help you save time and costs.",
      audit_details:
        "We provide Hong Kong companies with one-stop professional auditing, tax filing, and secretarial services, with transparent fees and simple processes to help you save time and costs.",
      new_audit_services_overview_title: "Service Overview",
      new_audit_annual_audit_title: "Annual Audit Services",
      new_audit_annual_audit_item1:
        "Ensure your company's legal compliance and regularly update all required documents.",
      new_audit_annual_audit_item2:
        "Update the latest annual business registration certificate (government fees)",
      new_audit_annual_audit_item3: "Acting as Company Secretary",
      new_audit_annual_audit_item4: "Providing a registered company address",
      new_audit_annual_audit_item5:
        "Submitting the updated annual return (government fees)",
      new_audit_annual_audit_item6: "Licensed Secretary Agent",
      new_audit_annual_audit_item7:
        "Accountants conduct the audit review and issue a formal audit report",

      new_audit_tax_filing_title: "Audit and Profits Tax Filing",
      new_audit_tax_filing_item1:
        "Accurately calculate profits tax to avoid underreporting or overpaying taxes",
      new_audit_tax_filing_item2:
        "Provide professional audit opinions and reports",
      new_audit_tax_filing_item3: "Complete and submit the profits tax return",
      new_audit_tax_filing_item4: "Calculate and submit tax filing data",
      new_audit_tax_filing_item5:
        "Assist in verifying tax assessment results and guiding payment",
      new_audit_tax_filing_item6: "Tax file compilation and transmission",

      new_audit_mpf_services_title: "MPF Annual Services",
      new_audit_mpf_services_item1:
        "Help you easily manage MPF contributions in compliance with regulatory requirements",
      new_audit_mpf_services_item2:
        "Plan contribution schedules to avoid late payments",
      new_audit_mpf_services_item3:
        "Assist in opening and managing personal and company MPF accounts",
      new_audit_mpf_services_item4:
        "Assist in monthly MPF contributions and follow up on contribution records",
      contact_info_email_2: "enquiry@winfo.hk",

      new_audit_value_added_title: "Value-added Services",
      new_audit_value_added_item1:
        "More business needs, one-stop solutions. (Prices vary depending on circumstances)",
      new_audit_value_added_item2:
        "Hong Kong Identity Card application and renewal",
      new_audit_value_added_item3: "Office leasing arrangements",

      new_audit_cta:
        "Click the WhatsApp button below now for a free consultation on your customized solution!",
      company_registration_description:
        "We offer one-stop Hong Kong company registration and bank account opening services. Mainland Chinese residents are eligible, with a 100% success rate in opening physical corporate or personal accounts. Our pricing is transparent, and the process is clear. We also provide company change services and value-added solutions to help you easily launch your business in Hong Kong.",
      audit_services_description:
        "We provide professional audit and tax filing services by licensed accountants, covering auditing, tax filing, company secretary, and MPF (Mandatory Provident Fund) management. It is a one-stop solution to meet compliance needs, save time and costs, and support your business operations in Hong Kong with peace of mind.",
      bud_fund_description:
        "The Dedicated Fund on Branding, Upgrading and Domestic Sales (BUD Fund), launched by the Hong Kong government in 2012, helps non-listed companies enhance their brand, improve operations, and expand into Mainland China and FTA markets.",
      hkstp_incubation_description:
        "HKSTP's Incubation Programme offers funding, mentorship, and resources to startups at different stages of development. From early-stage concepts to mature enterprises, it supports growth with office space, market validation, and global expansion opportunities, helping startups reach their full potential.",

      projects_bud_description_1:
        "The Dedicated Fund on Branding, Upgrading and Domestic Sales (BUD Fund) was launched by the Hong Kong government in 2012",
      projects_bud_description_2:
        "Assists non-listed enterprises in enhancing branding, optimizing business operations, and expanding into Mainland China and FTA markets",

      projects_banking_description_1:
        "Provides one-stop Hong Kong company registration and bank account opening services",
      projects_banking_description_2:
        "Suitable for Mainland residents with 100% success rate in opening physical accounts",
      projects_banking_description_3: "Transparent fees and clear processes",
      projects_banking_description_4:
        "Offers company changes and value-added services to help you easily start your Hong Kong business",

      projects_audit_description_1:
        "Services provided by professional licensed accountants",
      projects_audit_description_2:
        "Including: auditing, tax filing, company secretary, and MPF management",
      projects_audit_description_3:
        "One-stop solution for corporate compliance requirements",
      projects_audit_description_4:
        "Save time and costs, allowing you to focus on your business with peace of mind",

      projects_subsidies_description_1:
        "The Greater Bay Area provides multiple subsidies and support for Hong Kong and Macau youth and startups, including:",
      projects_subsidies_description_2:
        "Innovation and technology talent salary subsidies",
      projects_subsidies_description_3: "Up to HK$600,000 startup fund",
      projects_subsidies_description_4:
        "'One-dollar rent' offices and talent housing",
      projects_subsidies_description_5: "1:1 R&D subsidies",
      projects_subsidies_description_6: "Tax incentives",
      projects_subsidies_description_7:
        "Support for innovation development and regional integration in areas like Qianhai",

      projects_stp_description_1:
        "Provides funding, mentorship, and resources for startups at different stages",
      projects_stp_description_2:
        "Covers growth stages from early concepts to mature enterprises",
      projects_stp_description_3:
        "Offers office space, market validation, and global expansion support",
      projects_stp_description_4: "Helps startups realize their potential",

      projects_listing_description_1:
        "We conduct in-depth corporate analysis to develop tailored M&A and post-merger integration strategies that support sustained growth",
      projects_listing_description_2: "Our services include:",
      projects_listing_description_3:
        "Market value management reflecting the company’s industry standing",
      projects_listing_description_4:
        "Assisting shareholders in cashing out at favorable prices",

      // Comparison Table
      comparison_title: "Funding Scheme Comparison Table",
      scheme_type: "Scheme Type",
      funding_cap: "Funding Cap",
      project_duration: "Project Duration",
      main_purpose: "Main Purpose",
      eligible_regions_count: "Number of Eligible Regions",
      general_application: "General Application",
      general_application_cap: "HK$1 million",
      general_application_purpose:
        "Brand development, business upgrading, and market expansion",
      easy_bud: "Easy BUD",
      easy_bud_cap_comp: "HK$100,000",
      easy_bud_purpose:
        "Small-scale projects with a simplified application process",
      ecommerce_easy: "E-commerce Easy",
      ecommerce_easy_cap_comp: "HK$800,000",
      ecommerce_easy_purpose:
        "E-commerce projects covering Mainland China and ASEAN markets",

      // Notes/Exclusions
      notes_title: "Notes:",
      exclusion_ecommerce_title:
        "The following project expenses are not eligible for E-commerce Easy funding:",
      exclusion_mobile_apps:
        "Development/optimization of mobile applications: Applications or mini-programs not directly owned by the enterprise.",
      exclusion_website_payment:
        "Development/optimization of company websites: Adding e-payment functions incompatible with Mainland China.",
      exclusion_other_ecommerce:
        "Other e-commerce-related measures: Unrelated to e-commerce operations.",

      // Eligibility Criteria
      eligibility_title: "Eligibility Criteria",
      eligibility_condition_title:
        "Applicant enterprises must meet the following conditions:",
      eligibility_registration:
        "Registered in Hong Kong under the Business Registration Ordinance (Chapter 310) as non-listed entities.",
      eligibility_operations:
        "Engaged in substantive business operations in Hong Kong, supported by documents such as the latest audited financial statements or MPF contribution records.",
      eligibility_project_scope:
        "Projects must relate to brand development, business upgrading, or market expansion in Mainland China/ASEAN.",
      eligibility_execution:
        "Projects must be executed by the applicant enterprise or qualified service providers, not by business units in Mainland China or FTA/IPA markets.",

      // Application Process
      application_process_title: "Application Process",
      application_method:
        "Application Method: Using the electronic application system, submit applications via the BUD Fund website (www.bud.hkpc.org).",
      application_frequency:
        "Application Frequency: Each enterprise may submit one General Application, one Easy BUD Application, and one E-commerce Easy Application every 3 months.",
      approval_process:
        "Approval Process: Applications are reviewed by the HKPC, Departmental Committee, and Programme Management Committee, typically within 30 working days of receiving complete applications.",
      funding_disbursement:
        "Funding Disbursement: No initial funding is provided; funds are disbursed in stages upon submission of progress and final audited reports.",
      contact_prompt:
        "For further assistance, please leave your contact details, and we will contact you.",

      // Required Documents & How to Choose (Titles only as per text)
      required_documents_title: "Required Documents for Application",
      how_to_choose_title: "How to Choose Different Application Schemes",

      // Compliance Requirements
      compliance_title: "Compliance Requirements",
      compliance_law:
        "Enterprises must comply with Hong Kong laws, including the Prevention of Bribery Ordinance.",
      compliance_reports:
        "Submission of progress and final financial reports is required, with project records retained for at least 7 years for audit purposes.",
      compliance_procurement:
        "Procurement must follow guidelines, e.g., obtaining at least 5 supplier quotes for expenses exceeding HK$300,000.",
      get_in_touch: "Contact Us",
      get_in_touch_description:
        "If you are interested in applying for the BUD Special Fund or have any questions, please feel free to contact us. Our professional team can assist you with the entire application process to expedite approval.",
      new_innovation_subsidies_title:
        "Mainland Innovation Park Subsidies and Support Measures",
      new_innovation_subsidies_title1:
        "Mainland Innovation Park Subsidies and Support Measures",
      new_innovation_subsidies_title2: "",

      new_innovation_subsidies_subtitle:
        "The Greater Bay Area offers various subsidies and support for Hong Kong and Macao youth and startups to promote innovation, attract talent, and drive regional integration.",
      new_innovation_subsidies_description:
        "The following outlines key support policies, including talent subsidies, corporate grants, and tax incentives, especially those related to the Qianhai Shenzhen-Hong Kong Youth Dream Factory and other innovation parks.",

      new_innovation_support_details_title: "Support Measures Details",
      new_innovation_education_subsidy_title:
        "Educational Level-Based Subsidies: 'Research Talent Hub for ITF Projects'",
      new_innovation_education_subsidy_objective:
        "To subsidize institutions/companies supported by the ITF to hire research talent and drive innovation.",
      new_innovation_education_subsidy_eligibility:
        "Eligibility: Institutions/companies must be conducting ITF-funded R&D projects. Research talent must hold a local or recognized non-local STEM bachelor's, master's, or doctoral degree and be legally employed in Hong Kong.",
      new_innovation_education_subsidy_features:
        "Features: Up to 4 researchers per project for up to 36 months. Salary subsidies: HKD 20,000/month for bachelor’s, HKD 23,000 for master’s, HKD 35,000 for PhDs; PhDs also receive an additional HKD 10,000/month as living allowance.",
      new_innovation_education_subsidy_application:
        "Application: Open year-round through the ITC's funding management system.",

      new_innovation_youth_support_title:
        "Support for HK & Macao Youth Entrepreneurs",
      new_innovation_youth_support_description:
        "The 'Youth Entrepreneurship Funding Scheme in the Greater Bay Area' is a key program funded by the Home and Youth Affairs Bureau and Youth Development Committee.",
      new_innovation_youth_support_funding:
        "Financial Support: Each startup team may receive up to HKD 600,000.",
      new_innovation_youth_support_mentorship:
        "Startup Support: Includes mentorship, professional consulting, and industry networking.",
      new_innovation_youth_support_visits:
        "Mainland Visits: Organize visits to GBA startup bases to strengthen cross-border connections.",
      new_innovation_youth_support_note:
        "Note: This scheme is not open all year round.",

      new_innovation_dream_factory_title:
        "Dream Factory Office/Housing 'One-Yuan Rent' Offer",
      new_innovation_dream_factory_office:
        "Office Space: Startups in AI, embodied intelligence, life science, etc. are exempt from rent and only pay HKD 1/m²/month service fee for 3 years of incubation services.",
      new_innovation_dream_factory_housing:
        "Housing Support: Eligible startups may apply for the 'Longhai Garden' housing program, with ~400 sq. ft units for only RMB 1500/month.",
      new_innovation_dream_factory_facilities:
        "Other Facilities: Modern office spaces, meeting rooms, and co-working areas to foster collaboration.",
      new_innovation_dream_factory_subsidies:
        "Employment Subsidies: RMB 8000/month for PhD, 4000 for Master, 3000 for Bachelor, and 2000 for Associate degree holders, for up to 3 years.",
      new_innovation_dream_factory_housing_subsidies:
        "Housing Subsidy: RMB 1000/month if no property in Shenzhen and no other housing benefits, for up to 3 years.",
      new_innovation_dream_factory_living_subsidies:
        "Living Subsidy: RMB 2000/month for up to 3 years.",

      new_innovation_policy_support_title:
        "'1:1 Policy' Support and R&D Subsidies",
      new_innovation_policy_support_description:
        "The '1:1 Policy' supports R&D projects previously funded by HK government/universities with matching Mainland grants (up to HKD 1 million).",
      new_innovation_policy_support_scope:
        "Scope: Includes AI, biopharmaceuticals, green tech, and supports commercialization of research.",
      new_innovation_policy_support_application:
        "Application: Submit HK funding proof and project plan for Mainland park approval.",

      new_innovation_tax_incentives_title: "Tax Coordination Incentives",
      new_innovation_tax_incentives_description:
        "GBA promotes tax rule harmonization to reduce corporate and individual tax burdens.",
      new_innovation_tax_incentives_personal:
        "Personal Income Tax: GBA residents from HK/Macao are reimbursed for the portion exceeding 15% of their taxable income. Tax-free subsidy up to RMB 5 million/year.",
      new_innovation_tax_incentives_data:
        "Cross-border Data: The GBA Data Flow Contract facilitates data movement and simplifies tax filings.",

      new_innovation_application_guidelines_title: "Application Guidelines",
      new_innovation_application_guidelines_process:
        "Application Process: Typically requires business plan, financial forecast, and supporting documents. Requirements vary by park and policy.",
      new_innovation_application_guidelines_notes:
        "Notes: Policies may change. Please check official updates regularly.",
      new_innovation_application_guidelines_contact:
        "If you are interested in these subsidies or have any questions, please contact us. Our team can assist with the full application process and help you settle faster.",

      //Listing Page
      listing_support_details_title:
        "We conduct in-depth corporate analysis to develop tailored M&A and post-merger integration strategies that support sustained growth.",
      listing_support_title: "Listed Company Maintenance",
      listing_support_intro: "Our services include:",
      listing_support_item_1:
        "Market value management reflecting the company’s industry standing",
      listing_support_item_2:
        "Assisting shareholders in cashing out at favorable prices",
      listing_support_item_3: "Facilitating high-price secondary offerings",
      listing_support_item_4: "M&A advisory and execution",

      listing_financing_section_title: "Pre- & Post-IPO Financing",
      listing_financing_intro:
        "If a company meets all our pre-listing planning criteria and successfully qualifies for IPO, we can assist in securing both pre-IPO and post-IPO financing to fuel continued expansion.",
      listing_exclusion_title: "Exclusions & Disclaimers",
      listing_exclusion_intro:
        "We shall not be held liable if the IPO fails due to the following reasons:",
      listing_exclusion_item_1: "Natural disasters (e.g., earthquakes, floods)",
      listing_exclusion_item_2:
        "War, terrorism, riots, government sanctions, or seizures",
      listing_exclusion_item_3: "Nuclear incidents or radiation",
      listing_exclusion_item_4:
        "Widespread negative media coverage of the company",
      listing_exclusion_item_5:
        "Regulatory investigations or non-compliant behavior",
      listing_exclusion_item_6:
        "Submission of false documents or concealment of required information",
      listing_exclusion_item_7: "Industry-wide downturn",
      listing_exclusion_item_8:
        "Criminal acts, fraud, or non-cooperation by shareholders or management",
      listing_exclusion_item_9:
        "Changes in regulatory policies or stock market crashes",
      listing_exclusion_item_10:
        "Any other actions deemed by us as detrimental to the IPO process",

      standard_services_title: "Standard Services",
      standard_bonus: "Bonus: Opening a Hong Kong Personal Account (Free Gift)",
      bud_service_title12:
        "Dedicated Fund on Branding, Upgrading and Domestic Sales (BUD Fund) was launched by the Hong Kong Government in 2012",
      bud_service_description2:
        "It assists non-listed companies in enhancing their brands, optimizing their operations, and expanding into mainland China and free trade agreement markets.",
      company_registration_description2:
        "Provides one-stop Hong Kong company registration and account opening services.",
      mainland_residents_eligible:
        "Available to mainland residents, with a 100% success rate for opening physical accounts.",
      transparent_fees: "Transparent fees and clear processes.",
      value_added_services:
        "Offers company change services and various value-added services to help you easily launch your Hong Kong business.",
      professional_accountants:
        "Services provided by licensed professional accountants.",
      services_include:
        "Includes: auditing, tax filing, company secretarial services, and MPF management.",
      one_stop_compliance:
        "One-stop solution to meet all company compliance requirements.",
      save_time_and_costs:
        "Save time and costs, allowing you to focus on running your business.",
      gba_subsidies:
        "The Guangdong-Hong Kong-Macao Greater Bay Area offers various subsidies and support for Hong Kong and Macao youth and startups, including:",
      talent_subsidies: "Innovation and technology talent salary subsidies",
      startup_fund: "Up to HKD 600,000 startup fund",
      one_yuan_rent: "“One-yuan rent” office space and talent housing",
      rd_subsidy: "1:1 R&D subsidy",
      tax_incentives: "Tax incentives",
      support_qianhai:
        "Supporting innovation and regional integration in zones like Qianhai",
      startup_support:
        "Providing funding, mentorship, and resources for startups at different stages",
      growth_stages:
        "Covering growth stages from early-stage concepts to mature businesses",
      global_expansion_support:
        "Offering office space, market validation, and global expansion support",
      realize_potential: "Helping startups realize their potential",

      quick_link: "Quick Links",
      footnote2:
        "Providing professional financial guidance and supporting applications for various programs to help businesses expand and grow.",
    },
  },
  "zh-TW": {
    translation: {
      // Navbar
      nav_home: "首頁",
      nav_about: "關於",
      nav_apply: "落地",
      nav_work: "項目",
      nav_contact: "聯繫",
      // Hero Section
      hero_title: "WinFo",
      hero_subtitle: "助您把握商機",
      hero_subtitle_2: "開拓無限可能！",
      hero_cta: "查看我們的項目",
      hero_slogan_heading: "公司註冊到市場擴張，佔下先機步向成功企業",
      hero_slogan: "零隱形成本，零盲目探索",
      hero_slogan_2: "您的願景，我們的專長。",
      hero_slogan_3: "攜手WinFo：",
      hero_slogan_4: "高效開拓您的香港事業",
      hero_slogan_5: "全程護航穩贏商機！",
      // About Section
      about_title: "關於我們",
      about_text1:
        "WinFo 是一支結合內地與香港金融專才的專業顧問團隊，專注於企業發展、轉型升級與跨境拓展。我們深信，企業的成功不僅源自優質產品與服務，更仰賴背後精準的戰略規劃、資源整合與資金運用能力。",
      about_text2:
        "創始團隊匯聚資深銀行家、跨境貿易專家與科創企業家，三大核心賦能：\n" +
        "✅ 戰略落地：化解政策與文化落差，確保計劃順利執行\n" +
        "✅ 資金對接：匹配補貼、投資與融資資源，加速資金落地\n" +
        "✅ 資源整合：打通決策與執行環節，提升跨境合作效率與成效\n" +
        " \n" +
        "從中小企業合規出口到科技公司跨境孵化，我們以金融視角和實戰經驗，助您加速創業進程，節省寶貴時間。",
      about_tag_1: "經濟支持",
      about_tag_2: "市場發展",
      about_tag_3: "企業成長",
      // Work Section
      work_title: "精選項目",
      work_project: "項目 {{number}}",
      work_category: "類別",
      work_learn_more: "瞭解更多",
      work_bud: "BUD基金申請",
      work_hkstp: "進駐香港科技園孵化",
      work_hkstp_1: "進駐",
      work_hkstp_2: "香港科技園孵化",
      work_listing: "上市維護服務",
      Subsidies:
        "粵港澳大灣區為港澳青年及初創企業提供多項補貼，包括創科人才薪酬資助、最高60萬港元創業基金、「一元租」辦公室與人才住房、1:1研發補貼及稅務優惠，支援前海等園區的創新發展與區域融合。",

      work_index: "進駐香港",
      work_bank: "銀行公司戶口開戶/公司註冊",
      work_subsidy: "內地各創新園區補貼/人才補助/公司補貼",
      work_ccp: "持牌會計師審計報告",
      work_ccp_desc:
        "注冊香港公司好簡單\n\n 持牌會計師審計報告\n\n 助你大展鴻圖立足香港",
      work_bank_desc:
        "100%成功:內地身份証開立實體銀行公司/個人戶口\n\n成立香港公司\n\n香港公司年度審計及報稅",
      work_subsidy_section1_title: "人才生活津貼",
      work_subsidy_section1_item1: "高端人才補貼",
      work_subsidy_section1_item2: "學歷分級補貼",
      work_subsidy_section1_item3: "港澳青年創業支持",
      work_subsidy_section2_title: "夢工場辦公室/住房「一元租」優惠",
      work_subsidy_section3_title: "「1:1政策」配套支持",
      work_subsidy_section3_item1_title: "企業研發補貼",
      work_subsidy_section3_item1_details:
        "曾獲香港政府或大學支助的項目，可申請內地1:1現金補貼支助",
      work_subsidy_section3_item2_title: "創業貸款貼息",
      work_subsidy_section3_item2_details:
        "港澳青年創業可申請貸款，政府承擔部分利息，企業貸款最高500萬元，貼息期限最長3年",
      work_subsidy_section3_item3_title: "稅收協同優惠",
      work_subsidy_section3_item3_details:
        "粵港澳三地推動稅務規則銜接，例如跨境數據互通、智慧稅務系統，降低企業合規成本",
      // Collaborator Section
      collaborator_title: "我們值得信賴的合作夥伴",
      collaborator_GBA: "灣駒出行",
      collaborator_GBA_text: "大灣區跨境網約車服務",
      // Contact Section
      contact_title: "聯繫我們",
      contact_name: "姓名",
      contact_email: "電子郵件",
      contact_subject: "主題",
      contact_message: "訊息",
      contact_submit: "發送訊息",
      contact_info: "聯繫方式",
      contact_info_address: "九龍觀塘敬業街61-63號利維大廈1樓122室",
      contact_info_address_2: "",
      contact_info_phone: "+852 6651 5286",
      contact_info_phone_2: "+86 15622232717",
      contact_info_email: "winfobizsolution@gmail.com",
      contact_info_name: "",
      contact_info_name_2: "",
      contact_info_company_name: "Winfo Business Solutions Ltd.",
      contact_info_company_name_2: "盈豐商業有限公司",
      contact_business_hour: "營業時間",
      contact_business_hour_1: "星期一至星期五：上午9時至下午6時",
      contact_business_hour_2: "星期日及公眾假期：休息",
      // Footer
      footer_copyright: "© {{year}} 盈豐商業有限公司。版權所有。",
      footer_instagram: "Instagram",
      footer_twitter: "Twitter",
      footer_linkedin: "LinkedIn",
      footer_collaborator: "我們的合作夥伴",

      // HKSTP Page
      hkstp_description:
        "為處於各個階段的初創企業提供資金、指導和資源，幫助它們加速成長",
      index_description: "在香港創業並周詳審計您的公司",
      hkstp_description_2: "探索項目",
      hkstp_program_title: "選擇適合您的項目",
      hkstp_program_text:
        "根據您的初創企業目前所處的階段和發展需求，選擇合適的層級。從早期階段的想法到成熟的公司，我們都能提供量身定制的支持，幫助您取得成功。",

      hkstp_apply_title: "申請入駐香港科技園項目",
      hkstp_apply_name: "創始人名稱*",
      hkstp_apply_name_2: "全名",
      hkstp_apply_name_3: "公司/項目名稱*",
      hkstp_apply_name_4: "公司/項目名稱",
      hkstp_apply_email: "郵箱地址*",
      hkstp_apply_email_2: "you@example.com",
      hkstp_apply_phone: "電話號碼*",
      hkstp_apply_phone_2: "+852 1234 5678",
      hkstp_apply_description: "項目介紹*",
      hkstp_apply_description_2:
        "請描述您的業務、技術、目標市場和目前的進展情況...",
      hkstp_apply_submit: "提交申請",
      ordinary: "普通",
      luxury: "尊貴",
      index_title1: "香港公司年審(1年)",
      index_subtitle1: "更換最新年度商業登記證書(政府費用)",
      index_subtitle2: "出任公司秘書",
      index_subtitle3: "提供公司註冊地址",
      index_subtitle4: "遞交更新周年申報表(政府費用)",
      index_subtitle5: "秘書持牌代理人",
      index_subtitle6: "完成核數審查、出具會計師的核數報告",
      index_title2: "做帳審計利得稅申報(1年)",
      index_subtitle7: "審計報告公司業務分析，出具審計意見",
      index_subtitle8: "填寫申報利得稅",
      index_subtitle9: "計算利得稅，遞交報稅資料給稅務局",
      index_subtitle10: "審核評稅/指導支付稅費",
      index_subtitle11: "審計稅務檔案資料編制與傳遞",
      index_title3: "個人稅服務(1年)",
      index_subtitle12: "會計諮詢服務",
      index_subtitle13: "擔任個人稅務代表",
      index_subtitle14: "填寫個人稅申報表",
      index_subtitle15: "遞交給稅務局並申報",
      index_subtitle16: "稅務事宜指導及退稅事務處理",
      index_title4: "強積金年度服務(1年)",
      index_subtitle17: "強積金繳納節點規劃",
      index_subtitle18: "協助開立公司和個人強積金帳戶",
      index_subtitle19: "協助每月繳納強積金",
      index_subtitle20: "跟進繳納記錄服務",
      index_title5: "香港公司信息變更服務(選擇1項)",
      index_title5_1: "香港公司信息變更服務(選擇",
      index_title5_2: "項)",
      index_subtitle21: "香港公司分行註冊",
      index_subtitle22: "香港公司更名",
      index_subtitle23: "香港公司股權轉讓/增資擴股",
      index_subtitle24: "香港公司營業範圍變更",
      index_subtitle25: "香港公司董事變更",
      index_subtitle26: "香港公司改法定秘書",
      index_subtitle27: "香港公司註銷",
      index_subtitle28: "個人開立香港個戶服務(贈送)",
      index_title6: "增值服務(價格依情況定)",
      index_subtitle29: "香港補貼申請服務(BUD/EMF/青年就業補貼等)",
      index_subtitle30: "香港身份證申請及續簽服務",
      index_subtitle31: "香港辦公室租賃服務",
      index_remark1: "*價格只供參考，會受公司規模及所需服務範圍有所調整",
      index_title7: "尊貴服務",
      index_subtitle32: "香港公司註冊",
      index_subtitle33: "香港公司開立對公賬戶(非虛擬離岸銀行)",
      luxury_service: "尊貴服務",
      special_service_1: "普通服務",
      special_service_2: "(流水200萬港幣以內)",

      // Added by Matt from here
      // Program Stages
      stage_ideation: "構思",
      stage_incubation: "孵化",
      stage_acceleration: "加速",
      stage_elite: "精英",

      funding_up_to_table: "資助金額可高達",
      duration_ideation: "1年計劃",
      desc_ideation1: "適用於早期階段的構思",
      desc_ideation2: "輔導支援",
      desc_ideation3: "商業工作坊",

      hero_build_beyond_borders: "跨越邊界，創建無限可能",
      hero_connect_integrate_expand: "連接．融合．拓展",
      duration_incubation: "3年計劃",
      year: "年",
      years: "年",

      desc_incubation1: "適合擁有 MVP 的創業公司",
      desc_incubation2: "提供辦公室",
      desc_incubation3: "市場驗證支援",

      duration_acceleration: "2年計劃",
      desc_acceleration1: "種子或A輪初創公司",
      desc_acceleration2: "投資者網絡",
      desc_acceleration3: "擴展策略支援",
      // Required Documents
      documents_title: "申請計畫所需文件",
      documents_company_subtitle: "香港盈豐商業顧問",
      documents_hk_company_docs: "香港公司文件",
      documents_target_market_docs: "目標市場公司文件",
      documents_other_docs: "其他文件",
      documents_required_note: "必須文件",

      // Hong Kong Company Documents
      documents_hk_business_registration: "商業登記證 (BR)",
      documents_hk_certificate_incorporation: "公司註冊證明書 (CI)",
      documents_hk_annual_return: "周年申報表 (NAR1)",
      documents_hk_id_copy: "大股東(>30%)身分證 (ID copy)",
      documents_hk_mpf_statement: "最近3個月強積金供款證明 (MPF)",
      documents_hk_audit_report: "最近一年審計報告 (Audit Report)",
      documents_hk_trademark: "香港註冊商標（如有）",
      documents_hk_business_proof_title: "實質業務證明（最近期3-5份）",
      documents_hk_sales_invoice:
        "最近3個月香港銷售發票每月一張 (Sales Invoice)",
      documents_hk_contract: "商業合約 (Contract)",
      documents_hk_payment: "付款記錄 (Payment)",
      documents_hk_custom_declaration: "報關文件 (Custom Declaration)",
      documents_hk_rental_agreement: "有產印之租約 (Rental Agreement)",

      // Target Market Company Documents
      documents_target_business_license: "當地營業執照",
      documents_target_capital_info: "股東出資信息",
      documents_target_audit_report: "當地審計報告",
      documents_target_product_certification: "當地產品認證",
      documents_target_employee_count: "當地員工人數（電商易不需要）",
      documents_target_financial_report: "當地最近一年審計報告/營業額",
      documents_target_trademark: "當地註冊商標",
      documents_target_business_proof_title: "當地實質業務證明（最近期2-3份）",
      documents_target_sales_invoice_vat: "銷項增值稅發票 (Sales Invoice/ VAT)",
      documents_target_contract: "商業合約 (Contract)",
      documents_target_payment: "付款記錄 (Payment)",
      documents_target_custom_declaration: "報關文件 (Custom Declaration)",

      // Other Documents
      documents_other_project_leader_info:
        "項目統籌人[有MPF]（中英文姓名、職位、電郵、電話、傳真）",
      documents_other_deputy_leader_info:
        "副項目統籌人[有MPF]（中英文姓名、職位、電郵、電話、傳真）",
      documents_other_company_website: "公司網址 (Website)",
      documents_other_company_photos: "公司照片5張",
      documents_other_photo_requirements: "(1張清晰顯示招牌，1張顯示大堂水牌)",
      documents_other_agency_authorization: "代理品牌授權書",
      documents_other_promotional_materials:
        "介紹申請企業業務/產品/服務的宣傳單張/印刷品",
      documents_other_industry_association: "相關行業協會會員",
      documents_other_international_certification:
        "國際認證（產品質檢證書/認證/服務牌照）",
      documents_other_certification_requirements:
        "請確認實司有產品銷入當地，是否不一定要有當地的強制性檢測報告或牌照，如有，請提供出實司持有的相關證明文件",
      duration_elite: "3年計劃",
      desc_elite1: "B+輪公司",
      desc_elite2: "全球擴張支援",
      desc_elite3: "高管領導力輔導",

      amount_ideation: "港幣10萬元",
      amount_incubation: "港幣129萬元",
      amount_acceleration: "港幣480萬元",
      amount_elite: "港幣2150萬元",
      hide_program: "隱藏計劃比較",
      view_detailed_program: "檢視詳細的計劃比較",
      apply_title: "如何申請",
      apply_description: "我們簡化的申請流程旨在識別並支援最具潛力的初創企業",
      submit_application_title: "提交申請",
      submit_application_description:
        "填寫線上申請表，包括您的商業計劃、團隊詳情和資金需求。",
      initial_screening_title: "初步篩選",
      initial_screening_description:
        "我們的團隊將審查申請，以確保符合計劃要求並具有潛力。",
      panel_interview_title: "專家面試",
      panel_interview_description:
        "獲選的申請者將向我們的專家、投資者和行業專業人士小組進行陳述。",
      onboarding_title: "入園流程",
      onboarding_description:
        "成功申請者將獲得資金、資源，並開始他們的科學園計劃旅程。",

      apply_now: "立即申請",

      table_funding: "資金",
      table_duration: "時長",
      table_timeline: "申請時間表",
      table_support: "支援",
      table_incorporation: "成立年份",
      table_min_employees: "最低員工人數",
      table_valuation_revenue: "估值與收入",

      jan: "1月、5月、9月",
      year_round: "全年",
      by_invit: "通過邀請",

      footnote_1:
        "提供專業的財務指導，並支援申請不同的計劃，以協助企業擴展和成長。",
      how_to_apply_reminder:
        "以上是申請香港科技園孵化計劃的流程，我們會協助你通過面試。",
      contact_us:
        "如有興趣申請香港科技園孵化計劃或有任何疑問，歡迎聯絡我們，我們專業團隊可為您代辦全程申請，加快申請獲批。",
      servicet12: "公司註冊與銀行開戶服務",
      service_title1: "香港公司註冊與",
      service_title2: "銀行賬戶開設服務",

      service_description: "從註冊到開戶，幫助你穩健在香港開展事業。",
      service_highlight_1: "適用內地居民",
      service_highlight_2: "100%成功開立香港實體銀行公司／個人戶口",
      service_highlight_3: "服務透明無隱形收費，流程清晰、一次辦妥",

      service_overview: "服務項目一覽",
      moredetails: "詳情",

      // 普通服務
      standard_services_title: "普通服務",
      standard_item_1: "公司資訊變更服務（包括一項）",
      standard_item_2: "• 香港公司分行註冊",
      standard_item_3: "• 香港公司更名",
      standard_item_4: "• 香港公司股權轉讓/增資擴股",
      standard_item_5: "• 香港公司營業範圍變更",
      standard_item_6: "• 香港公司董事變更",
      standard_item_7: "• 香港公司改法定秘書",
      standard_item_8: "• 香港公司註銷",
      standard_bonus: "贈送：開立香港個人戶口",

      // 尊貴服務
      premium_services_title: "尊貴服務",
      premium_item_1: "公司設立與開戶服務",
      premium_item_2: "香港公司註冊",
      premium_item_3: "香港公司開立對公賬戶（非虛擬離岸銀行）",
      premium_item_4: "公司資訊變更服務（包括三項）",
      premium_item_5: "增值服務（價格按情況定）",
      premium_item_6: "香港身份證申請證與續簽",
      premium_item_7: "辦公室租賃安排",

      contact_whatsapp: "立即查詢方案",
      contact_phone: "+852 6651 5286",
      quick_link: "快速連結",
      footnote2:
        "提供專業的財務指導，並支援申請不同的計劃，以協助企業擴展和成長。",
      // Audit Services Page
      audit_services_title: "審計服務",

      // Program Comparison Table
      duration: "期限",

      application_timeline: "申請時間表",
      support: "支援",
      support_all_programs_include: "所有計劃均包括以下支援服務：",
      talent_mentorship_programmes: "人才及指導計劃",
      startup_networking_events: "初創網絡活動",
      business_training_workshops: "商業培訓工作坊",
      business_matching_opportunities: "商業配對機會",
      corporate_partnership_programmes: "企業合作夥伴計劃",
      fundraising_opportunities: "募資機會",
      years_of_incorporation: "成立年期",
      years_of_incorporation_note: "包括母公司及控股公司（如有）",
      incorporation_individual_team_no_limitation: "個人或團隊 (沒有限制)",
      incorporation_registered_company_2_years_less: "註冊公司 (2年或以下)",
      incorporation_non_ipo_company: "非上市公司",
      incorporation_hk_registered_company: "香港註冊公司",
      incorporation_general_startups_5_years_less:
        "5年或更短時間的一般初創公司",
      incorporation_2_years_or_more: "(2年或以上)",
      minimum_employees: "最少僱員人數",
      employees_at_least_1_staff: "至少 1 名全職或兼職人員",
      employees_2_fulltime_onsite: "2 名全職員工在現場工作",
      employees_min_50_percent_technical: "(最少 50% 為技術人員)",
      employees_worldwide_max_100: "全球僱員不超過 100 名",
      employees_at_least_1_fulltime_onsite: "至少 1 名全職人員在現場工作",
      employees_worldwide_min_30: "全球僱員不少於 30 名 (最少 50% 為技術人員)",
      valuation_revenue: "估值及收入",
      na: "不適用",
      company_has_prototype_mvp:
        "(公司原則上已完成原型或最小可行產品並正在進行市場驗證)",
      valuation_seed_series_a: "估值：種子輪或 A 輪",
      revenue_hkd_20million: "收入：約 2,000 萬港元",
      valuation_series_b_above: "估值：B 輪或以上",
      revenue_hkd_50million: "收入：約 5,000 萬港元",

      // TRAD
      // Application Guide
      guide_title: "如何選擇不同申請計畫",
      guide_company_subtitle: "香港盈豐商業顧問",

      // Key Points
      guide_point_1: "可視乎企業籌畫的預算及專案規模",
      guide_point_2: "計畫措施內容",
      guide_point_3: "申請專案是否需要申請企業的內地/當地業務單位協助執行",

      // Table Headers
      guide_considerations: "考慮重點",
      guide_recommendations: "建議方案",

      // Table Content - Considerations
      guide_budget_over_20w: "計畫專案總預算開支超過港幣20萬",
      guide_project_over_12_months: "計畫專案的推行時間多於12個月",
      guide_need_mainland_assistance: "需要內地業務單位協助專案推行",
      guide_ecommerce_larger_budget:
        "針對發展電商業務而想有較大的預算彈性（不設比例上限）",
      guide_no_new_business_expansion:
        "措施不涉及開新業務單位、招聘員工、機器、樣板預算等",
      guide_simple_short_term_measures:
        "申請只涉及簡單及短期措施（參展、商標註冊等）",
      guide_hope_fast_approval: "希望申請可儘快有審批結果",

      // Table Content - Recommendations
      guide_recommend_general_ecommerce: "一般申請/電商易",
      guide_recommend_ecommerce: "電商易",
      guide_recommend_ecommerce_application: "電商易/申請易",
      guide_recommend_application: "申請易",
      sub_1: "對2021年7月1日後首次在前海合作區就業的港澳青年(45周歲以下)，",

      company_registration_description:
        "我們提供一站式香港公司註冊與開戶服務，適用於內地居民，100%成功開立實體戶口，收費透明、流程清晰，並提供多項公司變更及增值服務，助您輕鬆啟動香港業務。",
      audit_services_description:
        "我們提供專業持牌會計師審計與報稅服務，涵蓋核數、報稅、秘書及強積金管理，一站式滿足公司合規需求，節省時間與成本，助您安心經營香港業務。",
      bud_fund_description:
        "發展品牌、升級轉型及拓展內銷市場的專項基金（BUD專項基金）由香港政府於2012年推出，協助非上市企業提升品牌、優化業務及拓展內地和自貿協定市場。",
      hkstp_incubation_description:
        "香港科技園創業培育計劃為不同階段的初創企業提供資金、導師指導及資源，助其加速成長。從早期概念到成熟企業，配合辦公空間、市場驗證及全球擴展支援，助初創企業實現潛力。",
      new_innovation_subsidies_title: "內地創新園區補貼與支援措施",
      new_innovation_subsidies_title1: "內地創新園區補貼與",
      new_innovation_subsidies_title2: "支援措施",

      new_innovation_subsidies_subtitle:
        "粵港澳大灣區為港澳青年及初創企業提供多項補貼與支援措施，促進創新科技發展、吸引人才及推動區域經濟融合。",
      new_innovation_subsidies_description:
        "以下詳細介紹各項補貼與支援政策，涵蓋人才補助、公司補貼及稅務優惠，特別針對前海深港青年夢工場及其他創新園區的措施。",

      new_innovation_support_details_title: "支援措施詳情",
      new_innovation_education_subsidy_title:
        "學歷分級補貼：「創新及科技基金研究人才庫」",
      new_innovation_education_subsidy_objective:
        "資助獲創新及科技基金支持的研發項目機構/公司，聘用研究人才推動科技創新。",
      new_innovation_education_subsidy_eligibility:
        "申請資格：機構/公司需進行基金資助研發項目；研究人才需持本地或認可非本地大學STEM學士、碩士或博士學位，且合法在港工作。",
      new_innovation_education_subsidy_features:
        "計劃特點：每項目最多聘用4名研究人才，聘期最長36個月；薪酬津貼：學士每月最高20,000港元，碩士23,000港元，博士35,000港元；博士另享每月10,000港元生活津貼。",
      new_innovation_education_subsidy_application:
        "申請方式：全年接受申請，通過創新科技署基金管理系統提交。",

      new_innovation_youth_support_title: "港澳青年創業支持",
      new_innovation_youth_support_description:
        "「粵港澳大灣區青年創業資助計劃」是支持香港青年創業的核心項目，獲得香港民政及青年事務局及青年發展委員會資助。",
      new_innovation_youth_support_funding:
        "資金資助：每個創業團隊最高可獲60萬港元資本資助。",
      new_innovation_youth_support_mentorship:
        "創業支援：提供創業導師、專業諮詢及業界交流。",
      new_innovation_youth_support_visits:
        "內地考察：組織青年參觀大灣區初創基地，增進與內地企業的聯繫。",
      new_innovation_youth_support_note: "注意：此計劃並非全年接受申請。",

      new_innovation_dream_factory_title: "夢工場辦公室/住房「一元租」優惠",
      new_innovation_dream_factory_office:
        "辦公空間：符合人工智能、具身智能、生命健康科技等產業領域的港澳青年初創企業免收租金，僅按照每平方米每月1元的服務金標準提供3年孵化服務。",
      new_innovation_dream_factory_housing:
        "住房支持：前海初創可申請「龍海家園」人才住房計劃，每月僅1500元左右，就可入住當地400呎的住宿單位。",
      new_innovation_dream_factory_facilities:
        "其他設施：提供現代化辦公設施、會議室及共享空間，促進創業交流。",
      new_innovation_dream_factory_subsidies:
        "就業補貼：博士8000元/月、碩士4000元/月、學士3000元/月、副學士或高級文憑2000元/月，補貼期限累計不超過3年。",
      new_innovation_dream_factory_housing_subsidies:
        "居住補貼：家庭在深圳無自有房產且未享受深圳市人才安家補貼及購房優惠政策的，按照1000元/月給予居住補貼，補貼期限累計不超過3年。",
      new_innovation_dream_factory_living_subsidies:
        "生活補貼：按照2000元/月給予生活補貼，補貼期限累計不超過3年。",

      new_innovation_policy_support_title: "「1:1政策」配套支持與企業研發補貼",
      new_innovation_policy_support_description:
        "「1:1政策」是內地與香港合作的重要措施，針對曾獲香港政府或大學資助的研發項目，內地提供與香港資助等額的現金補貼。",
      new_innovation_policy_support_scope:
        "適用範圍：涵蓋人工智能、生物醫藥、綠色科技等領域，鼓勵技術轉化及市場化。",
      new_innovation_policy_support_application:
        "申請流程：企業需提交香港資助證明及項目計劃，經內地園區審核後獲得補貼。",

      new_innovation_tax_incentives_title: "稅收協同優惠",
      new_innovation_tax_incentives_description:
        "粵港澳三地推動稅務規則銜接，降低企業及個人稅務負擔。",
      new_innovation_tax_incentives_personal:
        "個人所得稅優惠：港澳居民在大灣區工作，其個人所得稅超出應納稅所得額15%的部分，由大灣區九市政府補貼，且補貼免徵個人所得稅。",
      new_innovation_tax_incentives_data:
        "跨境數據互通：通過《粵港澳大灣區（內地、香港）個人信息跨境流動標準合同》，促進數據流通，簡化企業稅務申報。",

      new_innovation_application_guidelines_title: "申請指引",
      new_innovation_application_guidelines_process:
        "申請流程：通常需提交商業計劃書、財務預測及相關證明文件，具體要求因園區及政策而異。",
      new_innovation_application_guidelines_notes:
        "注意事項：政策細則可能隨時間更新，建議定期查閱官方公告。",
      new_innovation_application_guidelines_contact:
        "如有興趣申請上述補貼與支援措施或有任何疑問，歡迎聯絡我們，我們專業團隊可為您代辦全程申請，加快落戶及資源獲批。",

      //Listing Page
      listing_support_details_title:
        "我們為企業提供全面的上市後支援服務，透過深入調查，制定精準的併購與整合策略，協助企業持續發展。",
      listing_support_title: "上市維護",
      listing_support_intro: "服務包括：",
      listing_support_item_1: "基於產業地位實施有效的市值管理",
      listing_support_item_2: "協助股東在理想價位實現股票套現",
      listing_support_item_3: "推動高價增發融資",
      listing_support_item_4: "提供專業併購諮詢與執行支援",

      listing_financing_section_title: "上市前/後融資",
      listing_financing_intro:
        "若企業符合我們設定的上市前規劃標準並成功達標，我們將協助企業取得上市前及上市後的融資支持，為成長注入資本動力。",
      listing_exclusion_title: "除外責任",
      listing_exclusion_intro:
        "如因以下不可控或企業自身行為導致上市未能成功，本公司不承擔相應責任：",
      listing_exclusion_item_1: "自然災害（如地震、洪水等）",
      listing_exclusion_item_2: "戰爭、暴動、政府行為等不可抗力",
      listing_exclusion_item_3: "核事故或輻射污染",
      listing_exclusion_item_4: "企業負面新聞被廣泛報導",
      listing_exclusion_item_5: "企業被監管機構調查或有違規行為",
      listing_exclusion_item_6: "企業提供不實文件或隱瞞資料",
      listing_exclusion_item_7: "產業整體衰退",
      listing_exclusion_item_8: "股東或管理層存在惡意串通、欺詐、不配合等行為",
      listing_exclusion_item_9: "監理政策變動、股災等市場風險",
      listing_exclusion_item_10: "其他被本公司認定為影響上市進程的行為",

      // BUD Fund Page
      bud_1: "計劃背景與目的",

      bud_service_title1:
        "發展品牌、升級轉型及拓展內銷市場的專項基金（BUD專項基金）由香港特別行政區政府於2012年6月推出，旨在協助香港非上市企業提升品牌形象、優化業務模式，並拓展內地中國及其他自由貿易協定（FTA）或投資促進和保護協定（IPA）市場。該計劃由香港生產力促進局（HKPC）負責管理，幫助企業把握國家發展規劃（如「十二五」及「十四五」規劃）帶來的機遇，提升在目標市場的競爭力。", // From "發展品牌、升級轉型及拓展內銷市場的專項基金"
      bud_service_title2: "專項基金 (BUD專項基金)", // From "發展品牌、升級轉型及拓展內銷市場的專項基金"
      bud_service_description:
        "由香港特別行政區政府於2012年6月推出，旨在協助香港非上市企業提升品牌形象、優化業務模式，並拓展內地中國及其他自由貿易協定（FTA）或投資促進和保護協定（IPA）市場。該計劃由香港生產力促進局（HKPC）負責管理，幫助企業把握國家發展規劃（如「十二五」及「十四五」規劃）帶來的機遇，提升在目標市場的競爭力。",

      // Program Tiers
      bud_service_overview: "計劃的主要目標包括：", // From "計劃的主要目標包括："
      bud_service_highlight_1:
        "品牌發展：提升品牌知名度、設計、管理及可持續性。",
      bud_service_highlight_2:
        "業務升級：推動商業模式創新、產品技術升級及綠色轉型。",
      bud_service_highlight_3:
        "市場拓展：制定市場策略、建立業務單位、進行營銷及關係管理，特別針對內地中國及東盟市場。",

      bud_premium_item_5: "BUD 專項基金提供以下資助安排：", // From "資助詳情"
      bud_premium_item_6:
        "資助比例：政府資助最高25%的項目成本，企業需以現金承擔至少75%。",
      bud_premium_item_7:
        "每家企業累計資助上限為港幣700萬元，涵蓋最多70個獲批項目。",
      bud_premium_item_8:
        "「申請易」項目資助上限為港幣10萬元，需於12個月內完成。",
      bud_premium_item_9:
        "「電商易」項目資助上限為港幣80萬元，累計資助上限為港幣100萬元（計入總上限700萬元）。",

      // Funding Scope (Expanded to be more granular if needed in UI, or keep as a general list)
      funding_scope_title: "資助範圍包括但不限於以下項目類型：",
      funding_scope_ad: "在目標市場投放廣告（最多資助6個月運營費用）。",
      funding_scope_exhibitions:
        "參加展覽會（包括攤位費、設計、搭建及相關交通住宿費用）。",
      funding_scope_patent: "申請專利/商標註冊（每家企業上限港幣60萬元）。",
      funding_scope_testing: "產品或服務檢測及認證。",
      funding_scope_website: "建立或優化網站及流動應用程式。",
      funding_scope_promo: "製作宣傳品（如傳單、海報、目錄冊）。",
      funding_scope_online_sales: "建立線上銷售平台（最多資助6個月運營費用）。",
      funding_scope_audit: "外聘核數費用（每項目上限港幣5,000元）。",
      service_note:
        "我們的註冊與銀行開戶服務同樣涵蓋多個東南亞國家，包括泰國、印尼等東盟地區。有任何查詢，歡迎隨時聯絡我們。",
      bud_service_title12:
        "發展品牌、升級轉型及拓展內銷市場的專項基金（BUD專項基金）由香港政府於2012年推出",
      bud_service_description2:
        "協助非上市企業提升品牌、優化業務及拓展內地和自貿協定市場",
      company_registration_description2: "提供一站式香港公司註冊與開戶服務",
      mainland_residents_eligible: "適用於內地居民，100%成功開立實體戶口",
      transparent_fees: "收費透明、流程清晰",
      value_added_services: "提供公司變更及多項增值服務，助您輕鬆啟動香港業務",
      professional_accountants: "由專業持牌會計師提供服務",
      services_include: "包括：核數、報稅、公司秘書及強積金管理",
      one_stop_compliance: "一站式滿足公司合規需求",
      save_time_and_costs: "節省時間與成本，讓您安心經營業務",
      gba_subsidies:
        "粵港澳大灣區為港澳青年及初創企業提供多項補貼與支援，包括：",
      talent_subsidies: "創科人才薪酬資助",
      startup_fund: "最高60萬港元創業基金",
      one_yuan_rent: "「一元租」辦公室與人才住房",
      rd_subsidy: "1:1研發補貼",
      tax_incentives: "稅務優惠",
      support_qianhai: "支援前海等園區的創新發展與區域融合",
      startup_support: "為不同階段的初創企業提供資金、導師指導及資源",
      growth_stages: "涵蓋從早期概念到成熟企業的成長階段",
      global_expansion_support: "提供辦公空間、市場驗證及全球擴展支援",
      realize_potential: "協助初創企業實現潛力",

      bud_funding_details: "資助詳情",
      bud_funding_scope: "資助範圍",
      bud_funding_regions: "資助地域範圍",
      bud_funding_comparison: "資助計劃比較表",
      bud_scheme_type: "計劃類型",
      bud_funding_cap: "資助上限",
      bud_project_duration: "項目期限",
      bud_main_purpose: "主要用途",
      bud_region_quantity: "資助地域數量",
      bud_general_application: "一般申請",
      bud_amount_1m: "港幣100萬元",
      bud_month: "個月",
      bud_months: "個月",
      bud_general_purpose: "品牌發展、業務升級、市場拓展",
      bud_easy_bud: "申請易",
      bud_amount_100k: "港幣10萬元",
      bud_easy_bud_description: "小型項目，簡化申請流程",
      bud_ecommerce_easy: "電商易",
      bud_amount_800k: "港幣80萬元",
      bud_ecommerce_easy_description: "電子商務項目，涵蓋內地及東盟市場",
      bud_notes: "備註：",
      bud_eligibility: "申請資格",
      bud_application_process: "申請流程",
      bud_required_documents: "申請計劃所需文件",
      bud_how_to_choose: "如何選擇不同申請計畫",
      bud_compliance: "合規要求",

      // Additional content from the user's provided text (beyond previous scope)
      // Eligible Regions

      regions_ecommerce_easy:
        "電商易只限內地和及東盟十國（包括文萊、柬埔寨、印尼、老撾、馬來西亞、緬甸、菲律賓、新加坡、泰國和越南）。",
      regions_general_easy:
        "一般申請和申請易自貿協定及投資協定計畫（與香港簽署自由貿易協定及/或促進和保護投資協定的經濟體）資助地域範圍包括：",
      regions_asean1: "東南亞國家聯盟十國",
      regions_asean2:
        "汶萊、柬埔寨、印尼、老撾、馬來西亞、緬甸、菲律賓、新加坡、泰國、越南",
      regions_other_asia1: "其他亞洲經濟體",
      regions_other_asia2: "日本、韓國、科威特、澳門、阿拉伯聯合酋長國、巴林",
      regions_europe1: "歐洲",
      regions_europe2:
        "奧地利、比利時-盧森堡經濟聯盟、丹麥、歐洲自由貿易聯盟四國（冰島、列支敦士登、挪威和瑞士）、芬蘭、法國、格魯吉亞、德國、義大利、荷蘭、瑞典、英國、土耳其",
      regions_americas_oceania1: "美洲及大洋洲",
      regions_americas_oceania2: "澳洲、加拿大、智利、墨西哥、新西蘭",

      // Comparison Table
      comparison_title: "資助計劃比較表",
      scheme_type: "計劃類型",
      funding_cap: "資助上限",
      project_duration: "項目期限",
      main_purpose: "主要用途",
      eligible_regions_count: "資助地域數量",
      general_application: "一般申請",
      general_application_cap: "港幣100萬元", // Adjusted to match the specific number provided
      general_application_purpose: "品牌發展、業務升級、市場拓展",
      easy_bud: "申請易",
      easy_bud_cap_comp: "港幣10萬元", // Adjusted to match the specific number provided
      easy_bud_purpose: "小型項目，簡化申請流程",
      ecommerce_easy: "電商易",
      ecommerce_easy_cap_comp: "港幣80萬元", // Adjusted to match the specific number provided
      ecommerce_easy_purpose: "電子商務項目，涵蓋內地及東盟市場",

      // Notes/Exclusions
      notes_title: "備註：",
      exclusion_ecommerce_title: "以下專案項目是不獲電商易資助的開支：",
      exclusion_mobile_apps:
        "製作/優化流動應用程式：並非由企業直接擁有的應用程式或小程序。",
      exclusion_website_payment:
        "建立/優化公司網頁：於公司網頁中加入非內地適用的電子支付功能。",
      exclusion_other_ecommerce: "其他電商相關措施：與電商業務無關。",

      // Eligibility Criteria
      eligibility_title: "申請資格",
      eligibility_condition_title: "申請企業需滿足以下條件：",
      eligibility_registration:
        "根據《商業登記條例》（第310章）在香港註冊的非上市企業。",
      eligibility_operations:
        "在香港有實質經營活動，需提交相關證明文件（如最新年度經審計財務報表、強積金供款記錄等）。",
      eligibility_project_scope:
        "項目必須與品牌發展、業務升級或內地/東盟市場拓展相關。",
      eligibility_execution:
        "申請企業需自行執行項目或聘請合資格服務提供者，不接受由內地或FTA/IPA市場的業務單位執行項目。",

      // Application Process
      application_process_title: "申請流程",
      application_method:
        "申請方式：透過BUD專項基金網站（www.bud.hkpc.org）的電子申請系統提交申請表格及所需證明文件。",
      application_frequency:
        "申請頻率：每家企業每3個月可提交一項一般申請、一項「申請易」申請及一項「電商易」申請。",
      approval_process:
        "審批流程：由生產力局、部門委員會及計劃管理委員會審批，通常在收到完整申請後30個工作天內完成。",
      funding_disbursement:
        "資金發放：不設首期撥款，資金分期發放，需提交進度報告及最終經審計報告。",
      contact_prompt: "如有相關需求，請留下您的資料，以便我們進一步聯繫。",

      // Required Documents & How to Choose (Titles only as per text)
      required_documents_title: "申請計劃所需文件",
      how_to_choose_title: "如何選擇不同申請計畫",

      // Compliance Requirements
      compliance_title: "合規要求",
      compliance_law: "申請企業需遵守香港法律，包括《防止賄賂條例》。",
      compliance_reports:
        "需提交進度報告及最終財務報告，並保留項目記錄至少7年以供審計。",
      compliance_procurement:
        "採購需符合指引，例如開支超過港幣30萬元的項目需獲取至少5個供應商報價。",
      get_in_touch: "聯絡我們",
      get_in_touch_description:
        "如有興趣申請BUD專項基金或有任何疑問，歡迎聯繫我們，我們專業團隊可為您代辦全程申請，加快申請獲批。",
      new_audit_services_title: "專業持牌會計師審計與報稅服務",
      new_audit_services_title1: "審計與報稅服務",
      contact_info_email_2: "enquiry@winfo.hk",
      audit_details:
        "我們為香港企業提供一站式專業審計、報稅及秘書服務，透明收費，流程簡單，幫您節省時間和成本。",
      new_audit_services_subtitle:
        "由持牌會計師出具專業審計報告，助企業合規報稅、申請補貼、提升信譽與融資力。",
      new_audit_services_description:
        "我們為香港企業提供一站式專業審計、報稅及秘書服務，透明收費，流程簡單，幫您節省時間和成本。",

      new_audit_services_overview_title: "服務項目一覽",
      new_audit_annual_audit_title: "年度審計服務",
      new_audit_annual_audit_item1: "確保公司合法合規，定期更新各項必須文件。",
      new_audit_annual_audit_item2: "更新最新年度商業登記證（政府費用）",
      new_audit_annual_audit_item3: "出任公司秘書",
      new_audit_annual_audit_item4: "提供公司註冊地址",
      new_audit_annual_audit_item5: "遞交更新周年申報表（政府費用）",
      new_audit_annual_audit_item6: "秘書持牌代理人",
      new_audit_annual_audit_item7: "會計師完成核數審查，出具正式核數報告",

      new_audit_tax_filing_title: "審計與利得稅申報",
      new_audit_tax_filing_item1: "精準計算利得稅，避免漏報或多繳稅款",
      new_audit_tax_filing_item2: "提供專業審計意見及報告",
      new_audit_tax_filing_item3: "填寫並提交利得稅申報表",
      new_audit_tax_filing_item4: "計算並提交報稅資料",
      new_audit_tax_filing_item5: "協助核對評稅結果並指導付款",
      new_audit_tax_filing_item6: "稅務檔案編制與傳遞",

      new_audit_mpf_services_title: "強積金年度服務",
      new_audit_mpf_services_item1: "幫助您輕鬆管理強積金繳納，符合法規要求",
      new_audit_mpf_services_item2: "規劃繳納節點，避免逾期",
      new_audit_mpf_services_item3: "協助開立及管理個人及公司強積金帳戶",
      new_audit_mpf_services_item4: "每月協助繳納強積金，跟進繳納記錄",

      new_audit_value_added_title: "增值服務",
      new_audit_value_added_item1:
        "更多企業需求，一站式解決方案。（價格視情況而定）",
      new_audit_value_added_item2: "香港身份申請與續簽",
      new_audit_value_added_item3: "辦公室租賃安排",
      projects_bud_description_1:
        "發展品牌、升級轉型及拓展內銷市場的專項基金（BUD專項基金）由香港政府於2012年推出",
      projects_bud_description_2:
        "協助非上市企業提升品牌、優化業務及拓展內地和自貿協定市場",

      projects_banking_description_1: "提供一站式香港公司註冊與開戶服務",
      projects_banking_description_2: "適用於內地居民，100%成功開立實體戶口",
      projects_banking_description_3: "收費透明、流程清晰",
      projects_banking_description_4:
        "提供公司變更及多項增值服務，助您輕鬆啟動香港業務",

      projects_audit_description_1: "由專業持牌會計師提供服務",
      projects_audit_description_2: "包括：核數、報稅、公司秘書及強積金管理",
      projects_audit_description_3: "一站式滿足公司合規需求",
      projects_audit_description_4: "節省時間與成本，讓您安心經營業務",

      projects_subsidies_description_1:
        "粵港澳大灣區為港澳青年及初創企業提供多項補貼與支援，包括：",
      projects_subsidies_description_2: "創科人才薪酬資助",
      projects_subsidies_description_3: "最高60萬港元創業基金",
      projects_subsidies_description_4: "「一元租」辦公室與人才住房",
      projects_subsidies_description_5: "1:1研發補貼",
      projects_subsidies_description_6: "稅務優惠",
      projects_subsidies_description_7: "支援前海等園區的創新發展與區域融合",

      projects_stp_description_1:
        "為不同階段的初創企業提供資金、導師指導及資源",
      projects_stp_description_2: "涵蓋從早期概念到成熟企業的成長階段",
      projects_stp_description_3: "提供辦公空間、市場驗證及全球擴展支援",
      projects_stp_description_4: "協助初創企業實現潛力",

      projects_listing_description_1:
        "我們為企業提供全面的上市後支援服務，透過深入調查，制定精準的併購與整合策略，協助企業持續發",
      projects_listing_description_2: "服務包括:",
      projects_listing_description_3: " 基於產業地位實施有效的市值管理",
      projects_listing_description_4: " 協助股東在理想價位實現股票套現",
      new_audit_cta: "立即點擊下方 WhatsApp 按鈕，免費諮詢您的專屬方案！",
    },
  },
  "zh-CN": {
    translation: {
      // Navbar
      nav_home: "首页",
      nav_about: "关于",
      nav_apply: "落地",
      nav_work: "项目",
      nav_contact: "联系",
      // Hero Section
      hero_title: "WinFo",
      hero_subtitle: "助您把握商机",
      hero_subtitle_2: "开拓无限可能！",
      hero_cta: "查看我们的项目",
      hero_slogan_heading: "公司注册到市场扩张，占下先机步向成功企业",
      hero_slogan: "零隐形成本，零盲目探索",
      hero_slogan_2: "您的愿景，我们的专长。",
      hero_slogan_3: "携手WinFo：",
      hero_slogan_4: "高效开拓您的香港事业",
      hero_slogan_5: "全程护航稳赢商机！",
      // About Section
      about_title: "关于我们",
      about_text1:
        "WinFo 是一支结合内地与香港金融专才的专业顾问团队，专注于企业发展、转型升级与跨境拓展。我们深信，企业的成功不仅源自优质产品与服务，更仰赖背后精准的战略规划、资源整合与资金运用能力。",
      about_text2:
        "创始团队汇聚资深银行家、跨境贸易专家与科创企业家，三大核心赋能：\n" +
        "✅ 战略落地：化解政策与文化落差，确保计划顺利执行\n" +
        "✅ 资金对接：匹配补贴、投资与融资资源，加速资金落地\n" +
        "✅ 资源整合：打通决策与执行环节，提升跨境合作效率与成效\n" +
        " \n" +
        "从中小企业合规出口到科技公司跨境孵化，我们以金融视角和实战经验，助您加速创业进程，节省宝贵时间。",
      about_tag_1: "经济支持",
      about_tag_2: "市场发展",
      about_tag_3: "企业成长",
      // Work Section
      work_title: "精选项目",
      work_project: "项目 {{number}}",
      work_category: "类别",
      work_learn_more: "了解更多",
      work_bud: "BUD基金申请",
      work_hkstp: "进驻香港科技园孵化",
      work_hkstp_1: "进驻",
      work_hkstp_2: "香港科技园孵化",
      work_index: "进驻香港",
      work_bank: "银行公司户口开户/公司注册",
      work_subsidy: "内地各创新园区补贴/人才补助/公司补贴",
      work_ccp: "持牌会计师审计报告",
      work_listing: "上市维护服务",
      work_ccp_desc:
        "注册香港公司好简单\n\n 持牌会计师审计报告\n\n 助你大展鸿图立足香港",
      work_bank_desc:
        "100%成功:内地身份证开立实体银行公司/个人户口\n\n成立香港公司\n\n香港公司年度审计及报税",
      work_subsidy_section1_title: "人才生活津贴",
      work_subsidy_section1_item1: "高端人才补贴",
      work_subsidy_section1_item2: "学历分级补贴",
      work_subsidy_section1_item3: "港澳青年创业支持",
      work_subsidy_section2_title: "梦工场办公室/住房「一元租」优惠",
      work_subsidy_section3_title: "「1:1政策」配套支持",
      work_subsidy_section3_item1_title: "企业研发补贴",
      work_subsidy_section3_item1_details:
        "曾获香港政府或大学支助的项目，可申请内地1:1现金补贴支助",
      work_subsidy_section3_item2_title: "创业贷款贴息",
      work_subsidy_section3_item2_details:
        "港澳青年创业可申请贷款，政府承担部分利息，企业贷款最高500万元，贴息期限最长3年",
      work_subsidy_section3_item3_title: "税收协同优惠",
      work_subsidy_section3_item3_details:
        "粤港澳三地推动税务规则衔接，例如跨境数据互通、智慧税务系统，降低企业合规成本",
      // Collaborator Section
      collaborator_title: "我们值得信赖的合作伙伴",
      collaborator_GBA: "湾驹出行",
      collaborator_GBA_text: "大湾区跨境网约车服务",
      // Contact Section
      contact_title: "联系我们",
      contact_name: "姓名",
      contact_email: "电子邮件",
      contact_subject: "主题",
      contact_message: "消息",
      contact_submit: "发送消息",
      contact_info: "联系方式",
      contact_info_address: "九龙观塘敬业街61-63号利维大厦1楼122室",
      contact_info_address_2: "",
      contact_info_phone: "+852 6651 5286",
      contact_info_phone_2: "+86 15622232717",
      contact_info_email: "winfobizsolution@gmail.com",
      contact_info_email_2: "enquiry@winfo.hk",
      contact_info_name: "",
      contact_info_name_2: "",
      contact_info_company_name: "Winfo Business Solutions Ltd.",
      contact_info_company_name_2: "盈豐商業有限公司",
      contact_business_hour: "营业时间",
      contact_business_hour_1: "星期一至星期五：上午9时至下午6时",
      contact_business_hour_2: "星期日及公众假期：休息",
      // Footer
      footer_copyright: "© {{year}} 盈豐商業有限公司。版权所有。",
      footer_instagram: "Instagram",
      footer_twitter: "Twitter",
      footer_linkedin: "LinkedIn",
      footer_collaborator: "我们的合作伙伴",
      // HKSTP Page
      hkstp_description:
        "为处于各个阶段的初创企业提供资金、指导和资源，帮助它们加速成长",
      index_description: "在香港创业并周详审计您的公司",
      hkstp_description_2: "探索项目",
      hkstp_program_title: "选择适合您的项目",
      hkstp_program_text:
        "根据您的初创企业目前所处的阶段和发展需求，选择合适的层级。从早期阶段的想法到成熟的公司，我们都能提供量身定制的支持，帮助您取得成功。",
      hkstp_apply_title: "申请入驻香港科技园项目",
      hkstp_apply_name: "创始人名称*",
      hkstp_apply_name_2: "全名",
      hkstp_apply_name_3: "公司/项目名称*",
      hkstp_apply_name_4: "公司/项目名称",
      hkstp_apply_email: "邮箱地址*",
      hkstp_apply_email_2: "you@example.com",
      hkstp_apply_phone: "电话号码*",
      hkstp_apply_phone_2: "+852 1234 5678",
      hkstp_apply_description: "项目介绍*",
      hkstp_apply_description_2:
        "请描述您的业务、技术、目标市场和目前的进展情况...",
      hkstp_apply_submit: "提交申请",
      ordinary: "普通",
      luxury: "尊贵",
      index_title1: "香港公司年审(1年)",
      index_subtitle1: "更换最新年度商业登记证书(政府费用)",
      index_subtitle2: "出任公司秘书",
      index_subtitle3: "提供公司注册地址",
      index_subtitle4: "递交更新周年申报表(政府费用)",
      index_subtitle5: "秘书持牌代理人",
      index_subtitle6: "完成核数审查、出具会计师的核数报告",
      index_title2: "做账审计利得税申报(1年)",
      index_subtitle7: "审计报告公司业务分析，出具审计意见",
      index_subtitle8: "填写申报利得税",
      index_subtitle9: "计算利得税，递交报税资料给税务局",
      index_subtitle10: "审核评税/指导支付税费",
      index_subtitle11: "审计税务档案资料编制与传递",
      index_title3: "个税服务(1年)",
      index_subtitle12: "会计咨询服务",
      index_subtitle13: "担任个人税务代表",
      index_subtitle14: "填写个人税申报表",
      index_subtitle15: "递交给税务局并申报",
      index_subtitle16: "税务事宜指导及退税事务处理",
      index_title4: "强积金年度服务(1年)",
      index_subtitle17: "强积金缴纳节点规划",
      index_subtitle18: "协助开立公司和个人强积金账户",
      index_subtitle19: "协助每月缴纳强积金",
      index_subtitle20: "跟进缴纳记录服务",
      index_title5: "香港公司信息变更服务(任选1项)",
      index_title5_1: "香港公司信息变更服务(任选",
      index_title5_2: "项)",
      index_subtitle21: "香港公司分行注册",
      index_subtitle22: "香港公司更名",
      index_subtitle23: "香港公司股权转让/增资扩股",
      index_subtitle24: "香港公司营业范围变更",
      index_subtitle25: "香港公司董事变更",
      index_subtitle26: "香港公司改法定秘书",
      index_subtitle27: "香港公司注销",
      index_subtitle28: "个人开立香港个户服务(赠送)",
      index_title6: "增值服务(价格依情况定)",
      index_subtitle29: "香港补贴申请服务(BUD/EMF/青年就业补贴等)",
      index_subtitle30: "香港身份证申请及续签服务",
      index_subtitle31: "香港办公室租赁服务",
      index_remark1: "*价格只供参考，会受公司规模及所需服务范围有所调整",
      index_title7: "尊贵服务",
      index_subtitle32: "香港公司注册",
      index_subtitle33: "香港公司开立对公账户(非虚拟离岸银行)",
      luxury_service: "尊贵服务",
      special_service_1: "普通服务",
      special_service_2: "(流水200万港币以内)",

      // Added by Matt from here
      stage_ideation: "构思",
      stage_incubation: "孵化",
      stage_acceleration: "加速",
      stage_elite: "精英",

      funding_up_to_table: "资助金额可高达",
      year: "年",
      years: "年",

      duration_ideation: "1年计划",
      desc_ideation1: "适用于早期阶段的构思",
      desc_ideation2: "辅导支援",
      desc_ideation3: "商业工作坊",
      hero_build_beyond_borders: "跨越边界，打造无限可能",
      hero_connect_integrate_expand: "连接．融合．拓展",
      duration_incubation: "3年计划",
      desc_incubation1: "适合拥有 MVP 的创业公司",
      desc_incubation2: "提供办公室",
      desc_incubation3: "市场验证支援",

      duration_acceleration: "2年计划",
      desc_acceleration1: "种子或A轮初创公司",
      desc_acceleration2: "投资者网络",
      desc_acceleration3: "扩展策略支援",

      duration_elite: "3年计划",
      desc_elite1: "B+轮公司",
      desc_elite2: "全球扩张支援",
      desc_elite3: "高管领导力辅导",

      amount_ideation: "港币10万元",
      amount_incubation: "港币129万元",
      amount_acceleration: "港币480万元",
      amount_elite: "港币2150万元",
      hide_program: "隐藏计划比较",
      view_detailed_program: "检视详细的计划比较",

      apply_now: "立即申请",

      table_funding: "资金",
      table_duration: "时长",
      table_timeline: "申请时间表",
      table_support: "支援",
      table_incorporation: "成立年份",
      table_min_employees: "最低员工人数",
      table_valuation_revenue: "估值与收入",

      jan: "1月、5月、9月",
      year_round: "全年",
      by_invit: "通過邀請",
      apply_title: "如何申请",
      apply_description: "我们简化的申请流程旨在识别并支持最具潜力的初创企业",
      submit_application_title: "提交申请",
      submit_application_description:
        "填写在线申请表，包括您的商业计划、团队详情和资金需求。",
      initial_screening_title: "初步筛选",
      initial_screening_description:
        "我们的团队将审查申请，以确保符合计划要求并具有潜力。",
      panel_interview_title: "专家面试",
      panel_interview_description:
        "获选的申请者将向我们的专家、投资者和行业专业人士小组进行陈述。",
      onboarding_title: "入园流程",
      onboarding_description:
        "成功申请者将获得资金、资源，并开始他们的科学园计划旅程。",

      how_to_apply_reminder:
        "以上是申请香港科技园孵化计划的流程，我们会协助你通过面试。",
      contact_us:
        "如有兴趣申请香港科技园孵化计划或有任何疑问，欢迎联系我们，我们专业团队可为您代办全程申请，加快申请获批。",
      service_title1: "香港公司注册与",
      service_title2: "银行账户开设服务",
      service_description: "从注册到开户，帮助你稳健在香港开展事业。",
      service_highlight_1: "适用内地居民",
      service_highlight_2: "100%成功开立香港实体银行公司／个人户口",
      service_highlight_3: "服务透明无隐形收费，流程清晰、一次办妥",
      moredetails: "详情",

      service_overview: "服务项目一览",
      servicet12: "公司注册与银行开户服务",
      // 普通服务
      standard_services_title: "普通服务",
      standard_item_1: "公司资讯变更服务（包括一项）",
      standard_item_2: "• 香港公司分行注册",
      standard_item_3: "• 香港公司更名",
      standard_item_4: "• 香港公司股权转让/增资扩股",
      standard_item_5: "• 香港公司营业范围变更",
      standard_item_6: "• 香港公司董事变更",
      standard_item_7: "• 香港公司改法定秘书",
      standard_item_8: "• 香港公司注销",
      standard_bonus: "赠送：开立香港个人户口",

      // 尊贵服务
      premium_services_title: "尊贵服务",
      premium_item_1: "公司设立与开户服务",
      premium_item_2: "香港公司注册",
      premium_item_3: "香港公司开立对公账户（非虚拟离岸银行）",
      premium_item_4: "公司资讯变更服务（包括三项）",
      premium_item_5: "增值服务（价格按情况定）",
      premium_item_6: "香港身份证申请与续签",
      premium_item_7: "办公室租赁安排",

      contact_whatsapp: "立即查询方案",
      contact_phone: "+852 6651 5286",

      // Program Comparison Table
      duration: "期限",

      application_timeline: "申请时间表",

      support: "支持",
      support_all_programs_include: "所有计划均包括以下支持服务：",
      talent_mentorship_programmes: "人才及指导计划",
      startup_networking_events: "初创网络活动",
      business_training_workshops: "商业培训工作坊",
      business_matching_opportunities: "商业配对机会",
      corporate_partnership_programmes: "企业合作伙伴计划",
      fundraising_opportunities: "募资机会",
      years_of_incorporation: "成立年期",
      years_of_incorporation_note: "包括母公司及控股公司（如有）",
      incorporation_individual_team_no_limitation: "个人或团队 (没有限制)",
      incorporation_registered_company_2_years_less: "注册公司 (2年或以下)",
      incorporation_non_ipo_company: "非上市公司",
      incorporation_hk_registered_company: "香港注册公司",
      incorporation_general_startups_5_years_less:
        "5年或更短时间的一般初创公司",
      incorporation_2_years_or_more: "(2年或以上)",
      minimum_employees: "最少雇员人数",
      employees_at_least_1_staff: "至少 1 名全职或兼职人员",
      employees_2_fulltime_onsite: "2 名全职员工在现场工作",
      employees_min_50_percent_technical: "(最少 50% 为技术人员)",
      employees_worldwide_max_100: "全球雇员不超过 100 名",
      employees_at_least_1_fulltime_onsite: "至少 1 名全职人员在现场工作",
      employees_worldwide_min_30: "全球雇员不少于 30 名 (最少 50% 为技术人员)",
      valuation_revenue: "估值及收入",
      na: "不适用",
      company_has_prototype_mvp:
        "(公司原则上已完成原型或最小可行产品并正在进行市场验证)",
      valuation_seed_series_a: "估值：种子轮或 A 轮",
      revenue_hkd_20million: "收入：约 2,000 万港元",
      valuation_series_b_above: "估值：B 轮或以上",
      revenue_hkd_50million: "收入：约 5,000 万港元",

      // SIMP
      sub_1: "对2021年7月1日后首次在前海合作区就业的港澳青年(45周岁以下)，",
      service_note:
        "我们的注册与银行开户服务同样涵盖多个东南亚国家，包括泰国、印尼等东盟地区。如有任何查询，欢迎随时联系我们。",

      company_registration_description:
        "我们提供一站式香港公司注册与开户服务，适用于内地居民，100%成功开立实体户口，收费透明、流程清晰，并提供多项公司变更及增值服务，助您轻松启动香港业务。",
      audit_services_description:
        "我们提供专业持牌会计师审计与报税服务，涵盖核数、报税、秘书及强积金管理，一站式满足公司合规需求，节省时间与成本，助您安心经营香港业务。",
      bud_fund_description:
        "发展品牌、升级转型及拓展内销市场的专项基金（BUD专项基金）由香港政府于2012年推出，协助非上市企业提升品牌、优化业务及拓展内地和自贸协定市场。",
      hkstp_incubation_description:
        "香港科技园创业培育计划为不同阶段的初创企业提供资金、导师指导及资源，助其加速成长。从早期概念到成熟企业，配合办公空间、市场验证及全球扩展支援，助初创企业实现潜力。",

      bud_1: "计划背景与目的",

      bud_service_title1:
        "发展品牌、升级转型及拓展内销市场的专项基金（BUD专项基金）由香港特别行政区政府于2012年6月推出，旨在协助香港非上市企业提升品牌形象、优化业务模式，并拓展内地中国及其他自由贸易协定（FTA）或投资促进和保护协定（IPA）市场。该计划由香港生产力促进局（HKPC）负责管理，帮助企业把握国家发展规划（如「十二五」及「十四五」规划）带来的机遇，提升在目标市场的竞争力。",
      bud_service_title2: "专项基金 (BUD专项基金)",
      bud_service_description:
        "由香港特别行政区政府于2012年6月推出，旨在协助香港非上市企业提升品牌形象、优化业务模式，并拓展内地中国及其他自由贸易协定（FTA）或投资促进和保护协定（IPA）市场。该计划由香港生产力促进局（HKPC）负责管理，帮助企业把握国家发展规划（如「十二五」及「十四五」规划）带来的机遇，提升在目标市场的竞争力。",

      // Program Tiers
      bud_service_overview: "计划的主要目标包括：",
      bud_service_highlight_1:
        "品牌发展：提升品牌知名度、设计、管理及可持续性。",
      bud_service_highlight_2:
        "业务升级：推动商业模式创新、产品技术升级及绿色转型。",
      bud_service_highlight_3:
        "市场拓展：制定市场策略、建立业务单位、进行营销及关系管理，特别针对内地中国及东盟市场。",

      bud_premium_item_5: "BUD 专项基金提供以下资助安排：",
      bud_premium_item_6:
        "资助比例：政府资助最高25%的项目成本，企业需以现金承担至少75%。",
      bud_premium_item_7:
        "每家企业累计资助上限为港币700万元，涵盖最多70个获批项目。",
      bud_premium_item_8:
        "「申请易」项目资助上限为港币10万元，需于12个月内完成。",
      bud_premium_item_9:
        "「电商易」项目资助上限为港币80万元，累计资助上限为港币100万元（计入总上限700万元）。",

      Subsidies:
        "粤港澳大湾区为港澳青年及初创企业提供多项补贴，包括创科人才薪酬资助、最高60万港元创业基金、「一元租」办公室与人才住房、1:1研发补贴及税务优惠，支援前海等园区的创新发展与区域融合。",
      // Funding Scope
      funding_scope_title: "资助范围包括但不限于以下项目类型：",
      funding_scope_ad: "在目标市场投放广告（最多资助6个月运营费用）。",
      funding_scope_exhibitions:
        "参加展览会（包括摊位费、设计、搭建及相关交通住宿费用）。",
      funding_scope_patent: "申请专利/商标注册（每家企业上限港币60万元）。",
      funding_scope_testing: "产品或服务检测及认证。",
      funding_scope_website: "建立或优化网站及流动应用程序。",
      funding_scope_promo: "制作宣传品（如传单、海报、目录册）。",
      funding_scope_online_sales: "建立线上销售平台（最多资助6个月运营费用）。",
      funding_scope_audit: "外聘核数费用（每项目上限港币5,000元）。",
      bud_funding_details: "资助详情",
      bud_funding_scope: "资助范围",
      bud_funding_regions: "资助地域范围",
      bud_funding_comparison: "资助计划比较表",
      bud_scheme_type: "计划类型",
      bud_funding_cap: "资助上限",
      bud_project_duration: "项目期限",
      bud_main_purpose: "主要用途",
      bud_region_quantity: "资助地域数量",
      bud_general_application: "一般申请",
      bud_amount_1m: "港币100万元",
      bud_month: "个月",
      bud_months: "个月",
      bud_general_purpose: "品牌发展、业务升级、市场拓展",
      bud_easy_bud: "申请易",
      bud_amount_100k: "港币10万元",
      bud_easy_bud_description: "小型项目，简化申请流程",
      bud_ecommerce_easy: "电商易",
      bud_amount_800k: "港币80万元",
      bud_ecommerce_easy_description: "电子商务项目，涵盖内地及东盟市场",
      bud_notes: "备注：",
      bud_eligibility: "申请资格",
      bud_application_process: "申请流程",
      bud_required_documents: "申请计划所需文件",
      bud_how_to_choose: "如何选择不同申请计划",
      bud_compliance: "合规要求",
      quick_link: "快速連結",
      footnote2:
        "提供专业的财务指导，并支援申请不同的计划，以协助企业扩展和成长。",
      // Eligible Regions
      regions_title: "资助地域范围：",
      regions_ecommerce_easy:
        "《电商易》只限内地和及东盟十国（包括文莱、柬埔寨、印尼、老挝、马来西亚、缅甸、菲律宾、新加坡、泰国和越南）。",
      regions_general_easy:
        "《一般申请》和《申请易》自贸协定及投资协定计划（与香港签署自由贸易协定及/或促进和保护投资协定的经济体）资助地域范围包括：",
      regions_asean1: "东南亚国家联盟十国",
      regions_asean2:
        "文莱、柬埔寨、印尼、老挝、马来西亚、缅甸、菲律宾、新加坡、泰国、越南",

      regions_other_asia1: "其他亚洲经济体",
      regions_other_asia2: "日本、韩国、科威特、澳门、阿拉伯联合酋长国、巴林",
      regions_europe1: "欧洲",
      regions_europe2:
        "奥地利、比利时-卢森堡经济联盟、丹麦、欧洲自由贸易联盟四国（冰岛、列支敦士登、挪威和瑞士）、芬兰、法国、格鲁吉亚、德国、意大利、荷兰、瑞典、英国、土耳其",

      regions_americas_oceania1: "美洲及大洋洲",
      regions_americas_oceania2: "澳洲、加拿大、智利、墨西哥、新西兰",

      projects_bud_description_1:
        "发展品牌、升级转型及拓展内销市场的专项基金（BUD专项基金）由香港政府于2012年推出",
      projects_bud_description_2:
        "协助非上市企业提升品牌、优化业务及拓展内地和自贸协定市场",

      projects_banking_description_1: "提供一站式香港公司注册与开户服务",
      projects_banking_description_2: "适用于内地居民，100%成功开立实体户口",
      projects_banking_description_3: "收费透明、流程清晰",
      projects_banking_description_4:
        "提供公司变更及多项增值服务，助您轻松启动香港业务",

      projects_audit_description_1: "由专业持牌会计师提供服务",
      projects_audit_description_2: "包括：核数、报税、公司秘书及强积金管理",
      projects_audit_description_3: "一站式满足公司合规需求",
      projects_audit_description_4: "节省时间与成本，让您安心经营业务",

      projects_subsidies_description_1:
        "粤港澳大湾区为港澳青年及初创企业提供多项补贴与支援，包括：",
      projects_subsidies_description_2: "创科人才薪酬资助",
      projects_subsidies_description_3: "最高60万港元创业基金",
      projects_subsidies_description_4: "「一元租」办公室与人才住房",
      projects_subsidies_description_5: "1:1研发补贴",
      projects_subsidies_description_6: "税务优惠",
      projects_subsidies_description_7: "支援前海等园区的创新发展与区域融合",

      projects_stp_description_1:
        "为不同阶段的初创企业提供资金、导师指导及资源",
      projects_stp_description_2: "涵盖从早期概念到成熟企业的成长阶段",
      projects_stp_description_3: "提供办公空间、市场验证及全球扩展支援",
      projects_stp_description_4: "协助初创企业实现潜力",

      projects_listing_description_1:
        "我们为企业提供全面的上市后支援服务，透过深入调查，制定精准的併购与整合策略，协助企业持续发展",
      projects_listing_description_2: "服务包括：",
      projects_listing_description_3: " 基于产业地位实施有效的市值管理",
      projects_listing_description_4: " 协助股东在理想价位实现股票套现",

      // Comparison Table
      comparison_title: "资助计划比较表",
      scheme_type: "计划类型",
      funding_cap: "资助上限",
      project_duration: "项目期限",
      main_purpose: "主要用途",
      eligible_regions_count: "资助地域数量",
      general_application: "一般申请",
      general_application_cap: "港币100万元",
      general_application_purpose: "品牌发展、业务升级、市场拓展",
      easy_bud: "申请易",
      easy_bud_cap_comp: "港币10万元",
      easy_bud_purpose: "小型项目，简化申请流程",
      ecommerce_easy: "电商易",
      ecommerce_easy_cap_comp: "港币80万元",
      ecommerce_easy_purpose: "电子商务项目，涵盖内地及东盟市场",

      // Notes/Exclusions
      notes_title: "备注：",
      exclusion_ecommerce_title: "以下专案项目是不获电商易资助的开支：",
      exclusion_mobile_apps:
        "制作/优化流动应用程序：并非由企业直接拥有的应用程序或小程序。",
      exclusion_website_payment:
        "建立/优化公司网页：于公司网页中加入非内地适用的电子支付功能。",
      exclusion_other_ecommerce: "其他电商相关措施：与电商业务无关。",

      // Eligibility Criteria
      eligibility_title: "申请资格",
      eligibility_condition_title: "申请企业需满足以下条件：",
      eligibility_registration:
        "根据《商业登记条例》（第310章）在香港注册的非上市企业。",
      eligibility_operations:
        "在香港有实质经营活动，需提交相关证明文件（如最新年度经审计财务报表、强积金供款记录等）。",
      eligibility_project_scope:
        "项目必须与品牌发展、业务升级或内地/东盟市场拓展相关。",
      eligibility_execution:
        "申请企业需自行执行项目或聘请合资格服务提供者，不接受由内地或FTA/IPA市场的业务单位执行项目。",
      // Application Guide
      guide_title: "如何选择不同申请计划",
      guide_company_subtitle: "香港盈丰商业顾问",

      // Key Points
      guide_point_1: "可视乎企业筹划的预算及专案规模",
      guide_point_2: "计划措施内容",
      guide_point_3: "申请专案是否需要申请企业的内地/当地业务单位协助执行",

      // Table Headers
      guide_considerations: "考虑重点",
      guide_recommendations: "建议方案",

      // Table Content - Considerations
      guide_budget_over_20w: "计划专案总预算开支超过港币20万",
      guide_project_over_12_months: "计划专案的推行时间多于12个月",
      guide_need_mainland_assistance: "需要内地业务单位协助专案推行",
      guide_ecommerce_larger_budget:
        "针对发展电商业务而想有较大的预算弹性（不设比例上限）",
      guide_no_new_business_expansion:
        "措施不涉及开新业务单位、招聘员工、机器、样板预算等",
      guide_simple_short_term_measures:
        "申请只涉及简单及短期措施（参展、商标注册等）",
      guide_hope_fast_approval: "希望申请可尽快有审批结果",

      // Table Content - Recommendations
      guide_recommend_general_ecommerce: "一般申请/电商易",
      guide_recommend_ecommerce: "电商易",
      guide_recommend_ecommerce_application: "电商易/申请易",
      guide_recommend_application: "申请易",
      // Application Process
      application_process_title: "申请流程",
      application_method:
        "申请方式：透过BUD专项基金网站（www.bud.hkpc.org）的电子申请系统提交申请表格及所需证明文件。",
      application_frequency:
        "申请频率：每家企业每3个月可提交一项一般申请、一项「申请易」申请及一项「电商易」申请。",
      approval_process:
        "审批流程：由生产力局、部门委员会及计划管理委员会审批，通常在收到完整申请后30个工作天内完成。",
      funding_disbursement:
        "资金发放：不设首期拨款，资金分期发放，需提交进度报告及最终经审计报告。",
      contact_prompt: "如有相关需求，请留下您的资料，以便我们进一步联系。",

      // Required Documents & How to Choose (Titles only as per text)
      required_documents_title: "申请计划所需文件",
      how_to_choose_title: "如何选择不同申请计划",

      // Compliance Requirements
      compliance_title: "合规要求",
      compliance_law: "申请企业需遵守香港法律，包括《防止贿赂条例》。",
      compliance_reports:
        "需提交进度报告及最终财务报告，并保留项目记录至少7年以供审计。",
      compliance_procurement:
        "采购需符合指引，例如开支超过港币30万元的项目需获取至少5个供应商报价。",
      get_in_touch: "联系我们",
      get_in_touch_description:
        "如有兴趣申请BUD专项基金或有任何疑问，欢迎联系我们，我们专业团队可为您代办全程申请，加快申请获批。",

      new_audit_services_title1: "审计与报税服务",

      new_audit_services_title: "专业持牌会计师审计与报税服务",
      new_audit_services_subtitle:
        "由持牌会计师出具专业审计报告，助企业合规报税、申请补贴、提升信誉与融资力。",
      new_audit_services_description:
        "我们为香港企业提供一站式专业审计、报税及秘书服务，透明收费，流程简单，帮您节省时间和成本。",
      audit_details:
        "我们为香港企业提供一站式专业审计、报税及秘书服务，透明收费，流程简单，帮您节省时间和成本。",
      new_audit_services_overview_title: "服务项目一览",
      new_audit_annual_audit_title: "年度审计服务",
      new_audit_annual_audit_item1: "确保公司合法合规，定期更新各项必须文件。",
      new_audit_annual_audit_item2: "更新最新年度商业登记证（政府费用）",
      new_audit_annual_audit_item3: "出任公司秘书",
      new_audit_annual_audit_item4: "提供公司注册地址",
      new_audit_annual_audit_item5: "递交更新周年申报表（政府费用）",
      new_audit_annual_audit_item6: "秘书持牌代理人",
      new_audit_annual_audit_item7: "会计师完成核数审查，出具正式核数报告",

      new_audit_tax_filing_title: "审计与利得税申报",
      new_audit_tax_filing_item1: "精准计算利得税，避免漏报或多缴税款",
      new_audit_tax_filing_item2: "提供专业审计意见及报告",
      new_audit_tax_filing_item3: "填写并提交利得税申报表",
      new_audit_tax_filing_item4: "计算并提交报税资料",
      new_audit_tax_filing_item5: "协助核对评税结果并指导付款",
      new_audit_tax_filing_item6: "税务档案编制与传递",

      new_audit_mpf_services_title: "强积金年度服务",
      new_audit_mpf_services_item1: "帮助您轻松管理强积金缴纳，符合法规要求",
      new_audit_mpf_services_item2: "规划缴纳节点，避免逾期",
      new_audit_mpf_services_item3: "协助开立及管理个人及公司强积金帐户",
      new_audit_mpf_services_item4: "每月协助缴纳强积金，跟进缴纳记录",

      new_audit_value_added_title: "增值服务",
      new_audit_value_added_item1:
        "更多企业需求，一站式解决方案。（价格视情况而定）",
      new_audit_value_added_item2: "香港身份证申请与续签",
      new_audit_value_added_item3: "办公室租赁安排",

      new_audit_cta: "立即点击下方 WhatsApp 按钮，免费谘询您的专属方案！",
      new_innovation_subsidies_title: "内地创新园区补贴与支援措施",
      new_innovation_subsidies_title1: "内地创新园区补贴与",
      new_innovation_subsidies_title2: "支援措施",

      new_innovation_subsidies_subtitle:
        "粤港澳大湾区为港澳青年及初创企业提供多项补贴与支援措施，促进创新科技发展、吸引人才及推动区域经济融合。",
      new_innovation_subsidies_description:
        "以下详细介绍各项补贴与支援政策，涵盖人才补助、公司补贴及税务优惠，特别针对前海深港青年梦工场及其他创新园区的措施。",

      new_innovation_support_details_title: "支援措施详情",
      new_innovation_education_subsidy_title:
        "学历分级补贴：“创新及科技基金研究人才库”",
      new_innovation_education_subsidy_objective:
        "资助获创新及科技基金支持的研发项目机构/公司，聘用研究人才推动科技创新。",
      new_innovation_education_subsidy_eligibility:
        "申请资格：机构/公司需进行基金资助研发项目；研究人才需持本地或认可非本地大学STEM学士、硕士或博士学位，且合法在港工作。",
      new_innovation_education_subsidy_features:
        "计划特点：每项目最多聘用4名研究人才，聘期最长36个月；薪酬津贴：学士每月最高20,000港元，硕士23,000港元，博士35,000港元；博士另享每月10,000港元生活津贴。",
      new_innovation_education_subsidy_application:
        "申请方式：全年接受申请，通过创新科技署基金管理系统提交。",

      new_innovation_youth_support_title: "港澳青年创业支持",
      new_innovation_youth_support_description:
        "“粤港澳大湾区青年创业资助计划”是支持香港青年创业的核心项目，获得香港民政及青年事务局及青年发展委员会资助。",
      new_innovation_youth_support_funding:
        "资金资助：每个创业团队最高可获60万港元资本资助。",
      new_innovation_youth_support_mentorship:
        "创业支援：提供创业导师、专业咨询及业界交流。",
      new_innovation_youth_support_visits:
        "内地考察：组织青年参观大湾区初创基地，增进与内地企业的联系。",
      new_innovation_youth_support_note: "注意：此计划并非全年接受申请。",
      bud_service_title12:
        "发展品牌、升级转型及拓展内销市场的专项基（BUD专项基金）由香港政府于2012年推出",
      bud_service_description2:
        "协助非上市企业提升品牌、优化业务及拓展内地和自贸协定市场",
      company_registration_description2: "提供一站式香港公司注册与开户服务",
      mainland_residents_eligible: "适用于内地居民，100%成功开立实体户口",
      transparent_fees: "收费透明、流程清晰",
      value_added_services: "提供公司变更及多项增值服务，助您轻松启动香港业务",
      professional_accountants: "由专业持牌会计师提供服务",
      services_include: "包括：核数、报税、公司秘书及强积金管理",
      one_stop_compliance: "一站式满足公司合规需求",
      save_time_and_costs: "节省时间与成本，让您安心经营业务",
      gba_subsidies:
        "粤港澳大湾区为港澳青年及初创企业提供多项补贴与支援，包括：",
      talent_subsidies: "创科人才薪酬资助",
      startup_fund: "最高60万港元创业基金",
      one_yuan_rent: "「一元租」办公室与人才住房",
      rd_subsidy: "1:1研发补贴",
      tax_incentives: "税务优惠",
      support_qianhai: "支援前海等园区的创新发展与区域融合",
      startup_support: "为不同阶段的初创企业提供资金、导师指导及资源",
      growth_stages: "涵盖从早期概念到成熟企业的成长阶段",
      global_expansion_support: "提供办公空间、市场验证及全球扩展支援",
      realize_potential: "协助初创企业实现潜力",
      new_innovation_dream_factory_title: "梦工场办公室/住房“一元租”优惠",
      new_innovation_dream_factory_office:
        "办公空间：符合人工智能、具身智能、生命健康科技等产业领域的港澳青年初创企业免收租金，仅按每平方米每月1元的服务金标准提供3年孵化服务。",
      new_innovation_dream_factory_housing:
        "住房支持：前海初创可申请“龙海家园”人才住房计划，每月仅1500元左右，可入住当地400呎住宿单位。",
      new_innovation_dream_factory_facilities:
        "其他设施：提供现代化办公设施、会议室及共享空间，促进创业交流。",
      new_innovation_dream_factory_subsidies:
        "就业补贴：博士8000元/月、硕士4000元/月、学士3000元/月、副学士或高级文凭2000元/月，补贴期限累计不超过3年。",
      new_innovation_dream_factory_housing_subsidies:
        "居住补贴：家庭在深圳无自有房产且未享受深圳市人才安家补贴及购房优惠政策的，按1000元/月给予补贴，累计不超过3年。",
      new_innovation_dream_factory_living_subsidies:
        "生活补贴：按2000元/月给予，补贴期限累计不超过3年。",

      new_innovation_policy_support_title: "“1:1政策”配套支持与企业研发补贴",
      new_innovation_policy_support_description:
        "“1:1政策”是内地与香港合作的重要措施，针对曾获香港政府或大学资助的研发项目，内地提供等额现金补贴。",
      new_innovation_policy_support_scope:
        "适用范围：涵盖人工智能、生物医药、绿色科技等领域，鼓励技术转化及市场化。",
      new_innovation_policy_support_application:
        "申请流程：企业需提交香港资助证明及项目计划，经内地园区审核后获得补贴。",

      new_innovation_tax_incentives_title: "税收协同优惠",
      new_innovation_tax_incentives_description:
        "粤港澳三地推动税务规则衔接，降低企业及个人税务负担。",
      new_innovation_tax_incentives_personal:
        "个人所得税优惠：港澳居民在大湾区工作，其个税超出应纳税所得额15%的部分由九市政府补贴，且免征个税。",
      new_innovation_tax_incentives_data:
        "跨境数据互通：通过《粤港澳大湾区（内地、香港）个人信息跨境流动标准合同》，促进数据流通，简化企业税务申报。",

      //Listing Page
      listing_support_details_title:
        "我们为企业提供全面的上市后支援服务，透过深入调查，制定精准的併购与整合策略，协助企业持续发展。",
      listing_support_title: "上市维护",
      listing_support_intro: "服务包括",
      listing_support_item_1: "基于产业地位实施有效的市值管理",
      listing_support_item_2: "协助股东在理想价位实现股票套现",
      listing_support_item_3: "推动高价增发融资",
      listing_support_item_4: "提供专业併购谘询与执行支援",

      listing_financing_section_title: "上市前/后融资",
      listing_financing_intro:
        "若企业符合我们设定的上市前规划标准并成功达标，我们将协助企业取得上市前及上市后的融资支持，为成长注入资本动力。",
      listing_exclusion_title: "除外责任",
      listing_exclusion_intro:
        "如因以下不可控或企业自身行为导致上市未能成功，本公司不承担相应责任：",
      listing_exclusion_item_1: "自然灾害（如地震、洪水等）",
      listing_exclusion_item_2: "战争、暴动、政府行为等不可抗力",
      listing_exclusion_item_3: "核事故或辐射汙染",
      listing_exclusion_item_4: "企业负面新闻被广泛报导",
      listing_exclusion_item_5: "企业被监管机构调查或有违规行为",
      listing_exclusion_item_6: "企业提供不实文件或隐瞒资料",
      listing_exclusion_item_7: "产业整体衰退",
      listing_exclusion_item_8: "股东或管理层存在恶意串通、欺诈、不配合等行为",
      listing_exclusion_item_9: "监理政策变动、股灾等市场风险",
      listing_exclusion_item_10: "其他被本公司认定为影响上市进程的行为",

      // Required Documents
      documents_title: "申请计划所需文件",
      documents_company_subtitle: "香港盈丰商业顾问",
      documents_hk_company_docs: "香港公司文件",
      documents_target_market_docs: "目标市场公司文件",
      documents_other_docs: "其他文件",
      documents_required_note: "必须文件",

      // Hong Kong Company Documents
      documents_hk_business_registration: "商业登记证 (BR)",
      documents_hk_certificate_incorporation: "公司注册证明书 (CI)",
      documents_hk_annual_return: "周年申报表 (NAR1)",
      documents_hk_id_copy: "大股东(>30%)身份证 (ID copy)",
      documents_hk_mpf_statement: "最近3个月强积金供款证明 (MPF)",
      documents_hk_audit_report: "最近一年审计报告 (Audit Report)",
      documents_hk_trademark: "香港注册商标（如有）",
      documents_hk_business_proof_title: "实质业务证明（最近期3-5份）",
      documents_hk_sales_invoice:
        "最近3个月香港销售发票每月一张 (Sales Invoice)",
      documents_hk_contract: "商业合约 (Contract)",
      documents_hk_payment: "付款记录 (Payment)",
      documents_hk_custom_declaration: "报关文件 (Custom Declaration)",
      documents_hk_rental_agreement: "有产印之租约 (Rental Agreement)",

      // Target Market Company Documents
      documents_target_business_license: "当地营业执照",
      documents_target_capital_info: "股东出资信息",
      documents_target_audit_report: "当地审计报告",
      documents_target_product_certification: "当地产品认证",
      documents_target_employee_count: "当地员工人数（电商易不需要）",
      documents_target_financial_report: "当地最近一年审计报告/营业额",
      documents_target_trademark: "当地注册商标",
      documents_target_business_proof_title: "当地实质业务证明（最近期2-3份）",
      documents_target_sales_invoice_vat: "销项增值税发票 (Sales Invoice/ VAT)",
      documents_target_contract: "商业合约 (Contract)",
      documents_target_payment: "付款记录 (Payment)",
      documents_target_custom_declaration: "报关文件 (Custom Declaration)",

      // Other Documents
      documents_other_project_leader_info:
        "项目统筹人[有MPF]（中英文姓名、职位、电邮、电话、传真）",
      documents_other_deputy_leader_info:
        "副项目统筹人[有MPF]（中英文姓名、职位、电邮、电话、传真）",
      documents_other_company_website: "公司网址 (Website)",
      documents_other_company_photos: "公司照片5张",
      documents_other_photo_requirements: "(1张清晰显示招牌，1张显示大堂水牌)",
      documents_other_agency_authorization: "代理品牌授权书",
      documents_other_promotional_materials:
        "介绍申请企业业务/产品/服务的宣传单张/印刷品",
      documents_other_industry_association: "相关行业协会会员",
      documents_other_international_certification:
        "国际认证（产品质检证书/认证/服务牌照）",
      documents_other_certification_requirements:
        "请确认实司有产品销入当地，是否不一定要有当地的强制性检测报告或牌照，如有，请提供出实司持有的相关证明文件",

      new_innovation_application_guidelines_title: "申请指引",
      new_innovation_application_guidelines_process:
        "申请流程：通常需提交商业计划书、财务预测及相关证明文件，具体要求因园区和政策而异。",
      new_innovation_application_guidelines_notes:
        "注意事项：政策细则可能会更新，建议定期查阅官方公告。",
      new_innovation_application_guidelines_contact:
        "如有兴趣申请上述补贴与支援措施或有任何疑问，欢迎联系本团队，我们可协助您办理全程申请，加快落户及资源获批。",
    },
  },
};

i18n
  .use(HttpBackend) // 加載翻譯文件
  .use(LanguageDetector) // 自動檢測語言
  .use(initReactI18next) // 初始化 react-i18next
  .init({
    resources, // 翻譯資源
    lng: "zh", // 預設語言
    ns: ["translation"], // 命名空間
    defaultNS: "translation", // 預設命名空間
    supportedLngs: ["en", "zh-CN", "zh-TW"], // 支援的語言
    debug: true, // 開啟除錯模式
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ], // 語言檢測順序
      caches: ["cookie", "localStorage"], // 儲存語言選擇
    },
    fallbackLng: "en", // 預設語言
    interpolation: {
      escapeValue: false, // React 已經自動防範 XSS
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // 翻譯文件路徑
    },
  });
export default i18n;

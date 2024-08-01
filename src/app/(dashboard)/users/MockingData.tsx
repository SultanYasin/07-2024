
import React from 'react'

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

export const rows: GridRowsProp = [
      {
        id: 26,
        name: "John Doe",
        department: "Human Resources",
        email: "john.doe@example.com",
        job_title: "HR Manager",
        access: "admin",
      },
      {
        id: 27,
        name: "Jane Smith",
        department: "Engineering",
        email: "jane.smith@example.com",
        job_title: "Software Engineer",
        access: "user",
      },
      {
        id: 1,
        name: "Michael Johnson",
        department: "Sales",
        email: "michael.johnson@example.com",
        job_title: "Sales Executive",
        access: "manager",
      },
      {
        id: 2,
        name: "Emily Davis",
        department: "Marketing",
        email: "emily.davis@example.com",
        job_title: "Marketing Specialist",
        access: "user",
      },
      {
        id: 3,
        name: "William Brown",
        department: "Finance",
        email: "william.brown@example.com",
        job_title: "Accountant",
        access: "user",
      },
      {
        id: 4,
        name: "Olivia Wilson",
        department: "Customer Support",
        email: "olivia.wilson@example.com",
        job_title: "Support Representative",
        access: "user",
      },
      {
        id: 5,
        name: "James Jones",
        department: "Engineering",
        email: "james.jones@example.com",
        job_title: "DevOps Engineer",
        access: "manager",
      },
      {
        id: 6,
        name: "Isabella Garcia",
        department: "Product",
        email: "isabella.garcia@example.com",
        job_title: "Product Manager",
        access: "admin",
      },
      {
        id: 7,
        name: "Alexander Martinez",
        department: "Sales",
        email: "alexander.martinez@example.com",
        job_title: "Sales Manager",
        access: "admin",
      },
      {
        id: 8,
        name: "Sophia Lee",
        department: "Marketing",
        email: "sophia.lee@example.com",
        job_title: "Social Media Manager",
        access: "manager",
      },
      {
        id: 9,
        name: "Mason Anderson",
        department: "Finance",
        email: "mason.anderson@example.com",
        job_title: "Financial Analyst",
        access: "user",
      },
      {
        id: 10,
        name: "Mia Thomas",
        department: "Engineering",
        email: "mia.thomas@example.com",
        job_title: "Backend Developer",
        access: "user",
      },
      {
        id: 11,
        name: "Ethan Jackson",
        department: "Human Resources",
        email: "ethan.jackson@example.com",
        job_title: "HR Specialist",
        access: "user",
      },
      {
        id: 12,
        name: "Ava White",
        department: "Legal",
        email: "ava.white@example.com",
        job_title: "Legal Advisor",
        access: "user",
      },
      {
        id: 13,
        name: "Liam Harris",
        department: "Operations",
        email: "liam.harris@example.com",
        job_title: "Operations Manager",
        access: "manager",
      },
      {
        id: 14,
        name: "Ella Clark",
        department: "Engineering",
        email: "ella.clark@example.com",
        job_title: "Frontend Developer",
        access: "user",
      },
      {
        id: 15,
        name: "Lucas Lewis",
        department: "Product",
        email: "lucas.lewis@example.com",
        job_title: "Product Designer",
        access: "user",
      },
      {
        id: 16,
        name: "Amelia Robinson",
        department: "Customer Support",
        email: "amelia.robinson@example.com",
        job_title: "Support Manager",
        access: "manager",
      },
      {
        id: 17,
        name: "Noah Walker",
        department: "Engineering",
        email: "noah.walker@example.com",
        job_title: "QA Engineer",
        access: "user",
      },
      {
        id: 18,
        name: "Aiden Perez",
        department: "Sales",
        email: "aiden.perez@example.com",
        job_title: "Account Executive",
        access: "user",
      },
      {
        id: 19,
        name: "Harper Young",
        department: "Marketing",
        email: "harper.young@example.com",
        job_title: "Content Writer",
        access: "user",
      },
      {
        id: 20,
        name: "Elijah Hall",
        department: "Finance",
        email: "elijah.hall@example.com",
        job_title: "Budget Analyst",
        access: "user",
      },
      {
        id: 21,
        name: "Charlotte Allen",
        department: "Legal",
        email: "charlotte.allen@example.com",
        job_title: "Paralegal",
        access: "user",
      },
      {
        id: 22,
        name: "Daniel King",
        department: "Operations",
        email: "daniel.king@example.com",
        job_title: "Logistics Coordinator",
        access: "user",
      },
      {
        id: 23,
        name: "Grace Scott",
        department: "Customer Support",
        email: "grace.scott@example.com",
        job_title: "Customer Service Representative",
        access: "user",
      },
      {
        id: 24,
        name: "Henry Adams",
        department: "Product",
        email: "henry.adams@example.com",
        job_title: "UX Researcher",
        access: "user",
      },
      {
        id: 25,
        name: "Lily Baker",
        department: "Marketing",
        email: "lily.baker@example.com",
        job_title: "SEO Specialist",
        access: "user",
      },
    ];

    const columns: GridColDef[] = [
      { field: "id", headerName: "ID", width: 80 },
      { field: "email", headerName: "NAME", flex: 1 },
      { field: "department", headerName: "SURE NAME", flex: 1 },
      { field: "job_title", headerName: "TITLE", flex: 1 },
      { field: "access", headerName: "DEPARTMENT", flex: 1 },
      {
        field: "col6",
        headerName: "ACCESS LEVEL",
        flex: 1,
        renderCell: () => {
          return (
            <Box>
              <Typography> Admin </Typography>
            </Box>
          );
        },
      },
    ];
  
  


 

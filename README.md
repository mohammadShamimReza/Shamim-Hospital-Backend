
# Hospital management system

A modern hospital management system where every thing is managed dynamically. Like user, doctor, staff, notice, nurse managed


## Tech Stack


**Client:** nextjs, react, redux, tailwind

**Server:** Node, Express, prisma

**Database:** postgresql


## Crediantials

**Admin:** email: admin@gmail.com pass: admin123$#

**Patient/User:** email: user@gmail.com pass: user123$#

**Doctor:** email: doctor@gmail.com pass: doctor123$#

**Staff:** email: staff@gmail.com pass: staff123$#

**Nurse:** email: nurse@gmail.com pass: nurse123$#



## API Documentation

---

### **1. Authentication & Authorization**

- **POST `/api/auth/register`**
    - **Description**: Registers a new user with role-based access (Admin, Doctor, Patient, etc.).
    - **Request Body**:
      ```json
      {
        "name": "John Doe",
        "role": "doctor",
        "email": "email@example.com",
        "password": "password123"
      }
      ```

- **POST `/api/auth/login`**
    - **Description**: Authenticates the user and issues a JWT token.
    - **Request Body**:
      ```json
      {
        "email": "email@example.com",
        "password": "password123"
      }
      ```

- **GET `/api/auth/logout`**
    - **Description**: Logs out the user and invalidates the session.

---

### **2. Patient Management**

- **POST `/api/patients`**
    - **Description**: Creates a new patient record.
    - **Request Body**:
      ```json
      {
        "name": "Jane Doe",
        "age": 45,
        "contact": "123-456-7890",
        "assignedDoctorId": "doctorId"
      }
      ```

- **GET `/api/patients`**
    - **Description**: Retrieves a list of all patients.

- **GET `/api/patients/:id`**
    - **Description**: Retrieves details of a specific patient.

- **PUT `/api/patients/:id`**
    - **Description**: Updates patient information.

- **DELETE `/api/patients/:id`**
    - **Description**: Deletes a patient record.

---

### **3. Doctor & Staff Management**

- **POST `/api/doctors`**
    - **Description**: Registers a new doctor.
    - **Request Body**:
      ```json
      {
        "name": "Dr. Smith",
        "specialty": "Cardiology",
        "contact": "123-456-7890"
      }
      ```

- **GET `/api/doctors`**
    - **Description**: Retrieves a list of all doctors.

- **GET `/api/doctors/:id`**
    - **Description**: Retrieves details of a specific doctor.

---

### **4. Appointment Scheduling**

- **POST `/api/appointments`**
    - **Description**: Schedules a new appointment.
    - **Request Body**:
      ```json
      {
        "patientId": "patientId",
        "doctorId": "doctorId",
        "appointmentDate": "YYYY-MM-DD",
        "timeSlot": "09:00-10:00"
      }
      ```

- **GET `/api/appointments`**
    - **Description**: Retrieves all appointments.

- **GET `/api/appointments/:id`**
    - **Description**: Retrieves details of a specific appointment.

- **PUT `/api/appointments/:id`**
    - **Description**: Reschedules or updates appointment details.

- **DELETE `/api/appointments/:id`**
    - **Description**: Cancels an appointment.

---

### **5. Medical Records (EMR)**

- **POST `/api/medical-records`**
    - **Description**: Creates a new medical record for a patient.
    - **Request Body**:
      ```json
      {
        "patientId": "patientId",
        "diagnosis": "Diagnosis text",
        "treatment": "Treatment text",
        "prescriptions": ["med1", "med2"]
      }
      ```

- **GET `/api/medical-records/:id`**
    - **Description**: Retrieves all medical records for a specific patient.

- **PUT `/api/medical-records/:id`**
    - **Description**: Updates a specific medical record.

- **DELETE `/api/medical-records/:id`**
    - **Description**: Deletes a specific medical record.

---

### **6. Billing & Invoicing**

- **POST `/api/billing`**
    - **Description**: Creates a new billing invoice.
    - **Request Body**:
      ```json
      {
        "patientId": "patientId",
        "amount": 1500,
        "details": "Consultation + Tests"
      }
      ```

- **GET `/api/billing`**
    - **Description**: Retrieves all billing records.

- **GET `/api/billing/:id`**
    - **Description**: Retrieves specific billing details.

- **PUT `/api/billing/:id`**
    - **Description**: Updates billing details.

---

### **7. Inventory Management**

- **POST `/api/inventory`**
    - **Description**: Adds a new item to the inventory.
    - **Request Body**:
      ```json
      {
        "itemName": "Medicine A",
        "quantity": 100,
        "expiryDate": "YYYY-MM-DD"
      }
      ```

- **GET `/api/inventory`**
    - **Description**: Retrieves all inventory items.

- **PUT `/api/inventory/:id`**
    - **Description**: Updates inventory item details.

- **DELETE `/api/inventory/:id`**
    - **Description**: Removes an item from the inventory.

---

### **8. Reporting & Analytics**

- **GET `/api/reports/patient-summary`**
    - **Description**: Generates a report with patient counts, visit frequencies, etc.

- **GET `/api/reports/revenue-summary`**
    - **Description**: Provides an overview of monthly revenue.

---

### **9. Real-Time Messaging**

- **POST `/api/messages`**
    - **Description**: Sends a new message.
    - **Request Body**:
      ```json
      {
        "senderId": "doctorId",
        "receiverId": "patientId",
        "messageText": "Hello, how are you feeling today?"
      }
      ```

- **GET `/api/messages/conversation/:conversationId`**
    - **Description**: Retrieves all messages in a specific conversation.

- **GET `/api/messages/unread`**
    - **Description**: Retrieves unread messages for the logged-in user.

---

### **10. Video Calling (Agora)**

- **POST `/api/video/generate-token`**
    - **Description**: Generates a token for an Agora video session.
    - **Request Body**:
      ```json
      {
        "channelName": "appointmentId",
        "uid": "userId",
        "role": "publisher"
      }
      ```
    - **Response**:
      ```json
      {
        "token": "agora_generated_token"
      }
      ```

- **POST `/api/video/start-call`**
    - **Description**: Starts a video call for an appointment.
    - **Request Body**:
      ```json
      {
        "appointmentId": "appointmentId",
        "doctorId": "doctorId",
        "patientId": "patientId"
      }
      ```
    - **Response**:
      ```json
      {
        "channelName": "appointmentId",
        "token": "agora_generated_token"
      }
      ```

- **POST `/api/video/end-call`**
    - **Description**: Ends an ongoing video call session.
    - **Request Body**:
      ```json
      {
        "channelName": "appointmentId"
      }
      ```

---


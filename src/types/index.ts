export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  profilePicture?: string;
  role: 'patient' | 'physio' | 'admin';
  isVerified: boolean;
  createdAt: string;
}

export interface Patient extends User {
  role: 'patient';
  appointmentHistory: string[];
}

export interface Physiotherapist extends User {
  role: 'physio';
  specialization: string;
  qualifications: string[];
  experience: number;
  documents: {
    aadhar: string;
    degree: string;
    license: string;
  };
  verificationStatus: 'pending' | 'approved' | 'rejected';
  availabilitySlots: TimeSlot[];
  rating: number;
  reviewCount: number;
}

export interface TimeSlot {
  day: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface Appointment {
  _id: string;
  patientId: string;
  physioId: string;
  reason: string;
  symptoms: string;
  preferredTime: string;
  status: 'pending' | 'confirmed' | 'rejected' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  amount: number;
  commission: number;
  createdAt: string;
  scheduledAt: string;
}

export interface Service {
  _id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  loading: boolean;
}
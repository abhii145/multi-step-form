import { z } from "zod";

export const personalDetailsSchema = z
  .object({
    name: z.string().nonempty(),
    email: z.string().email(),
    aadharId: z.coerce.number().min(5),
    occupation: z.enum(["salaried", "student", "businessman"]),
    bank: z.enum(["X Bank", "Y Bank", "Z Bank"]),
    bankAccount: z.coerce.number(),
    confirmBankAccount: z.coerce.number(),
    salary: z.coerce.number().optional(),
    gstNo: z.coerce.number().optional(),
  })
  .refine((data) => data.bankAccount === data.confirmBankAccount, {
    path: ["confirmBankAccount"],
    message: "Bank account does not match",
  })
  .refine(
    (data) => {
      if (data.occupation === "salaried") {
        return typeof data.salary === "number";
      }
      return true;
    },
    {
      message: "Salary is required for salaried employees",
      path: ["salary"],
    }
  )
  .refine(
    (data) => {
      if (data.occupation === "businessman") {
        return typeof data.gstNo === "number";
      }
      return true;
    },
    {
      message: "Gst is required for salaried employees",
      path: ["gstNo"],
    }
  );

export const addressSchema = z.object({
  address: z.string().min(5).max(100),
  city: z.string().min(2).max(50),
  state: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  zipCode: z.string().regex(/^\d{6}$/),
});

export const FinalStepSchema = z.object({
  isChecked: z.boolean(),
  selectedLanguage: z.enum(["english", "hindi"]),
});


export const schemas = [
  z
  .object({
    name: z.string().nonempty(),
    email: z.string().email(),
    aadharId: z.coerce.number().min(5),
    occupation: z.enum(["salaried", "student", "businessman"]),
    bank: z.enum(["X Bank", "Y Bank", "Z Bank"]),
    bankAccount: z.coerce.number().min(5),
    confirmBankAccount: z.coerce.number().min(5),
    salary: z.coerce.number().optional(),
    gstNo: z.coerce.number().optional(),
  })
  .refine((data) => data.bankAccount === data.confirmBankAccount, {
    path: ["confirmBankAccount"],
    message: "Bank account does not match",
  })
  .refine(
    (data) => {
      if (data.occupation === "salaried") {
        return typeof data.salary === "number";
      }
      return true;
    },
    {
      message: "Salary is required for salaried employees",
      path: ["salary"],
    }
  )
  .refine(
    (data) => {
      if (data.occupation === "businessman") {
        return typeof data.gstNo === "number";
      }
      return true;
    },
    {
      message: "Gst is required for salaried employees",
      path: ["gstNo"],
    }
  ),
  z.object({
    address: z.string().min(5).max(100),
  city: z.string().min(2).max(50),
  state: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  zipCode: z.string().regex(/^\d{6}$/),
  }),
  z.object({
    agree: z.boolean().refine(value => value === true, {
      message: 'Please agree to terms and conditions',
      path: ['agree'],
    }),
    additionalInfo: z.string().optional(),
  }),
];
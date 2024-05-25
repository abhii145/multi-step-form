import { z } from "zod";

const today = new Date();
export const schemas = [
  z
    .object({
      name: z.string().min(1),
      email: z.string().email(),
      dateOfBirth: z.string()
    .refine((date) => {
      const inputDate = new Date(date);
      return inputDate < today;
    }, {
      message: "Date of birth cannot be today or in the future."
    }),
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
    .superRefine((data, ctx) => {
      if (data.occupation === "salaried" && !data.salary) {
        ctx.addIssue({
          path: ["salary"],
          message: "Salary is required for salaried employees",
          code: z.ZodIssueCode.custom,
        });
      }
      if (data.occupation === "businessman" && !data.gstNo) {
        ctx.addIssue({
          path: ["gstNo"],
          message: "GST number is required for businessmen",
          code: z.ZodIssueCode.custom,
        });
      }
    }),
  z.object({
    address: z.string().min(5).max(100),
    city: z.string().min(2).max(50),
    state: z.string().min(2).max(50),
    country: z.string().min(2).max(50),
    zipCode: z.string().regex(/^\d{6}$/),
  }),
  z.object({
    agree: z.boolean().refine((value) => value === true, {
      message: "Please agree to terms and conditions",
      path: ["agree"],
    }),
    additionalInfo: z.string().optional(),
  }),
];

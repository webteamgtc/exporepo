"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PhoneInput, { getCountryCallingCode, isValidPhoneNumber } from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-number-input/style.css";
import OtpInput from "react-otp-input";
import { useLocationDetail } from "../context/useLocationDetail";
import { toast } from "react-toastify";
import Select from "react-select";
import { useTranslations, useLocale } from "next-intl";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";

// Set NEXT_PUBLIC_SKIP_SUBMIT_APIS=true in .env for local UI-only testing
const SKIP_SUBMIT_APIS =
    process.env.NEXT_PUBLIC_SKIP_SUBMIT_APIS === "true";

function getPartnerCodeFromParams(searchParams) {
    if (!searchParams) return "";
    return (
        searchParams.get("code") ||
        searchParams.get("ref") ||
        searchParams.get("partner_id") ||
        searchParams.get("partner_code") ||
        searchParams.get("ib") ||
        searchParams.get("token") ||
        ""
    );
}

function hasCodeOrRefParam(searchParams) {
    if (!searchParams) return false;
    return !!(
        searchParams.get("code") ||
        searchParams.get("ref") ||
        searchParams.get("partner_id") ||
        searchParams.get("partner_code") ||
        searchParams.get("ib") ||
        searchParams.get("token")
    );
}

function isEmailAvailable(data) {
    return data?.code === 200 && /available/i.test(data?.message || "");
}


// put above your return()
const selectStyles = {
    control: (base, state) => ({
        ...base,
        backgroundColor: '#fff',
        color: '#000',
        borderColor: state.isFocused ? '#666684' : '#d1d5db',
        boxShadow: 'none',
        ':hover': { borderColor: '#666684' },
        minHeight: 42,
    }),
    valueContainer: (base) => ({ ...base, color: '#000' }),
    singleValue: (base) => ({ ...base, color: '#000' }),
    input: (base) => ({ ...base, color: '#000' }),
    placeholder: (base) => ({ ...base, color: '#6b7280' }),
    menu: (base) => ({
        ...base,
        backgroundColor: '#fff',
        color: '#000',
        zIndex: 9999,
    }),
    menuList: (base) => ({ ...base, backgroundColor: '#fff' }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected
            ? '#e5e7eb'
            : state.isFocused
                ? '#f3f4f6'
                : '#fff',
        color: '#000',
        ':active': { backgroundColor: '#e5e7eb' },
    }),
    indicatorSeparator: (base) => ({ ...base, backgroundColor: '#e5e7eb' }),
    dropdownIndicator: (base, state) => ({
        ...base,
        color: state.isFocused ? '#666684' : '#9ca3af',
        ':hover': { color: '#666684' },
    }),
};

const Welcome50CountrySelect = ({ value, onChange, options, disabled, readOnly }) => {
    const [open, setOpen] = useState(false);
    const [menuStyle, setMenuStyle] = useState({});
    const triggerRef = useRef(null);
    const dialCode = value ? getCountryCallingCode(value) : getCountryCallingCode("AE");
    const countryOptions = options.filter((option) => !option.divider && option.value);

    useEffect(() => {
        if (!open) return;

        const updatePosition = () => {
            const rect = triggerRef.current?.getBoundingClientRect();
            if (!rect) return;

            setMenuStyle({
                position: "fixed",
                top: rect.bottom + 4,
                left: rect.left,
                width: Math.max(rect.width, 240),
                zIndex: 9999,
            });
        };

        updatePosition();
        window.addEventListener("scroll", updatePosition, true);
        window.addEventListener("resize", updatePosition);

        return () => {
            window.removeEventListener("scroll", updatePosition, true);
            window.removeEventListener("resize", updatePosition);
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event) => {
            const menu = document.getElementById("welcome50-country-menu");
            if (
                triggerRef.current?.contains(event.target) ||
                menu?.contains(event.target)
            ) {
                return;
            }
            setOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    const menu =
        open && typeof document !== "undefined"
            ? createPortal(
                <ul
                    id="welcome50-country-menu"
                    role="listbox"
                    aria-label="Phone number country"
                    style={menuStyle}
                    className="max-h-52 overflow-y-auto rounded-lg border border-[#e2e8f0] bg-white py-1 shadow-lg"
                >
                    {countryOptions.map(({ value: countryValue, label }) => (
                        <li key={countryValue}>
                            <button
                                type="button"
                                role="option"
                                aria-selected={countryValue === value}
                                onClick={() => {
                                    onChange(countryValue);
                                    setOpen(false);
                                }}
                                className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm text-[#111827] hover:bg-[#f1f5f9] ${countryValue === value ? "bg-[#eff6ff] font-semibold" : ""
                                    }`}
                            >
                                <span>{label}</span>
                                <span className="text-[#64748b]">+{getCountryCallingCode(countryValue)}</span>
                            </button>
                        </li>
                    ))}
                </ul>,
                document.body
            )
            : null;

    return (
        <div className="PhoneInputCountry" ref={triggerRef}>
            <button
                type="button"
                disabled={disabled || readOnly}
                onClick={() => {
                    if (!disabled && !readOnly) {
                        setOpen((prev) => !prev);
                    }
                }}
                className="flex h-full w-full items-center gap-1.5 bg-transparent px-3 py-0 text-left disabled:cursor-not-allowed"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label="Phone number country"
            >
                <span className="welcome50-dial-code">+{dialCode}</span>
                <div className="PhoneInputCountrySelectArrow" aria-hidden="true" />
            </button>
            {menu}
        </div>
    );
};

const welcome50SelectStyles = {
    ...selectStyles,
    control: (base, state) => ({
        ...base,
        backgroundColor: '#fff',
        color: '#111827',
        borderColor: state.isFocused ? '#2563eb' : '#e2e8f0',
        boxShadow: state.isFocused ? '0 0 0 1px rgba(37, 99, 235, 0.2)' : 'none',
        ':hover': { borderColor: state.isFocused ? '#2563eb' : '#cbd5e1' },
        minHeight: 44,
        borderRadius: 8,
    }),
    placeholder: (base) => ({ ...base, color: '#9ca3af' }),
};


const CommonMainForm = ({ successPath, isMobile = false, variant = "default" }) => {
    const { countryData } = useLocationDetail();
    const [otpLoading, setOtpLoading] = useState(false);
    const params = useSearchParams();
    const urlPartnerCode = getPartnerCodeFromParams(params);
    const partnerCodeReadOnly = hasCodeOrRefParam(params);
    const [codeSent, setCodeSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [gtcCountries, setGtcCountries] = useState([]);
    const gtcCountriesRef = useRef([]);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const router = useRouter();
    const isWelcome50 = variant === "welcome50";
    const t = useTranslations(isWelcome50 ? "newPage.form" : "home.form");
    const locale = useLocale();

    useEffect(() => {
        gtcCountriesRef.current = gtcCountries;
    }, [gtcCountries]);

    useEffect(() => {
        axios
            .post("/api/gtc/get-country")
            .then((res) => {
                if (res?.data?.code === 200 && Array.isArray(res.data.data)) {
                    setGtcCountries(res.data.data);
                }
            })
            .catch(() => {});
    }, []);

    const countryOptions = [...gtcCountries]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item) => ({
            value: item.name,
            label: (
                <div className="flex items-center gap-2">
                    <img
                        src={`https://flagcdn.com/w40/${(item.code || "").toLowerCase()}.png`}
                        alt={item.name}
                        className="w-5 h-4 object-cover"
                    />
                    <span>{item.name}</span>
                </div>
            ),
        }));

            // generate password
    const generatePassword = (length = 12) => {
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        return Array.from(
            { length },
            () => chars[Math.floor(Math.random() * chars.length)]
        ).join("");
    };

    // formik setup
    const formik = useFormik({
        initialValues: {
            nickname: "",
            last_name: "",
            email: "",
            phone: "",
            country: "",
            area: "",
            otp: "",
            password: "",
            confirmPassword: "",
            invitation: urlPartnerCode || "",
            terms: false,
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            nickname: Yup.string()
                .matches(/^[A-Za-z\s]+$/, t("errors.firstNameRequired"))
                .required(t("errors.firstNameRequired")),
            last_name: Yup.string()
                .matches(/^[A-Za-z\s]+$/, t("errors.lastNameRequired"))
                .required(t("errors.lastNameRequired")),
            email: Yup.string()
                .email(t("errors.emailInvalid"))
                .required(t("errors.emailRequired")),
            phone: Yup.string()
                .required(t("errors.phoneRequired"))
                .test("is-valid-e164", t("errors.phoneInvalid"), (value) => {
                    if (!value) return false;
                    return isValidPhoneNumber(value);
                }),
            country: Yup.string().required(t("errors.countryRequired")),
            otp: Yup.string()
                .length(6, t("errors.otpLength"))
                .required(t("errors.otpRequired")),
            password: Yup.string()
                .min(8, t("errors.passwordRequired"))
                .matches(/^(?=.*[A-Za-z])(?=.*\d)/, t("errors.passwordRequired"))
                .required(t("errors.passwordRequired")),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], t("errors.passwordMatch"))
                .required(t("errors.confirmPasswordRequired")),
            terms: Yup.bool().oneOf([true], t("errors.termsRequired")),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            const password = generatePassword();
            try {
                if (SKIP_SUBMIT_APIS) {
                    toast.success(t("thankYou1"));
                    localStorage.setItem("user", JSON.stringify(values));
                    router.push(successPath);
                    formik.resetForm();
                    setCodeSent(false);
                    return;
                }

                if (!codeSent) {
                    toast.error(t("otpFail"));
                    return;
                }

                const selectedCountry = gtcCountriesRef.current.find(
                    (c) => c.name === values.country
                );
                if (!selectedCountry) {
                    toast.error(t("errors.countryRequired"));
                    return;
                }

                const parsedPhone = values.phone
                    ? parsePhoneNumberFromString(values.phone)
                    : null;
                const deepLinkValue = params.get("deep_link_value") || "";
                const regPayload = {
                    code: values.otp,
                    is_company: 0,
                    area:
                        parsedPhone?.countryCallingCode ||
                        selectedCountry.phone_code ||
                        values.area,
                    country: selectedCountry.name,
                    email: values.email,
                    phone: values.phone || "",
                    password: values.password,
                    lastname: values.last_name,
                    firstname: values.nickname,
                    serverId:50,
                    ...(values.invitation?.trim()
                        ? {
                              ref: values.invitation.trim(),
                              invite_code: values.invitation.trim(),
                          }
                        : {}),
                    ...(deepLinkValue.trim()
                        ? { deep_link_value: deepLinkValue.trim() }
                        : {}),
                };

                const res = await axios.post("/api/gtc/reg", regPayload);
                if (res?.data?.code === 200) {
                    toast.success(res?.data?.message || t("thankYou1"));
                    localStorage.setItem(
                        "user",
                        JSON.stringify({
                            ...values,
                            firstname: values.nickname,
                            lastname: values.last_name,
                        })
                    );
                    router.push(successPath);
                    formik.resetForm();
                    setCodeSent(false);
                } else {
                    toast.error(res?.data?.message || t("otpFail"));
                }
            } catch (err) {
                console.error(err);
                toast.error(err?.response?.data?.message || t("otpFail"));
            } finally {
                setLoading(false);
            }
        },
    });

    useEffect(() => {
        formik.setFieldValue(
            "invitation",
            urlPartnerCode || ""
        );
    }, [urlPartnerCode]);

    useEffect(() => {
        if (countryData?.country && gtcCountries.length > 0) {
            const match = gtcCountries.find((c) => c.code === countryData.country);
            if (match) {
                formik.setFieldValue("country", match.name);
                formik.setFieldValue("area", match.phone_code || "");
            }
        }
    }, [countryData?.country, gtcCountries]);

    const sendVerificationCode = async () => {
        await formik.setFieldTouched("email", true);
        const emailError = await formik.validateField("email");
        if (emailError || !formik.values.email) {
            toast.error(emailError || t("errors.emailRequired"));
            return;
        }

        setOtpLoading(true);
        try {
            const checkRes = await axios.post("/api/gtc/check-email", {
                email: formik.values.email,
            });

            if (!isEmailAvailable(checkRes?.data)) {
                toast.error(checkRes?.data?.message || t("errors.emailInvalid"));
                return;
            }

            const codeRes = await axios.post("/api/gtc/get-code", {
                email: formik.values.email,
                type: "0",
            });

            if (codeRes?.data?.code === 200) {
                setCodeSent(true);
                formik.setFieldValue("otp", "");
                toast.success(codeRes?.data?.message || t("otpSent"));
            } else {
                toast.error(codeRes?.data?.message || t("otpFail"));
            }
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || t("otpFail"));
        } finally {
            setOtpLoading(false);
        }
    };

    const color = isMobile ? "text-[#fff]" : "text-[#666684]";
    const labelClass = isWelcome50
        ? "text-[13px] font-bold text-[#111827] mb-1.5 block"
        : `text-sm ${color} mb-1`;
    const inputClass = (hasError) =>
        isWelcome50
            ? `w-full h-11 border rounded-lg px-3 text-sm text-[#111827] placeholder:text-[#9ca3af] bg-white focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]/20 ${hasError ? "border-red-500" : "border-[#e2e8f0]"
            }`
            : `w-full border px-3 py-2 rounded-md ${isMobile ? "bg-[#33335b]" : ""} ${hasError ? "border-red-500" : "border-gray-300"
            }`;
    const codeBtnClass = isWelcome50
        ? `absolute top-1/2 -translate-y-1/2 ${locale == "ar" ? "left-2" : "right-2"} bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#475569] px-3 py-1.5 rounded-md text-xs font-semibold transition-colors disabled:opacity-60`
        : `absolute min-h-[41px] top-0 ${locale == "ar" ? "left-0" : "right-0"} bg-[#666684] text-white px-3 py-1 rounded-md text-xs`;
    const placeholder = (key) => (isWelcome50 ? t(`placeholders.${key}`) : t(key));
    const showOtpSection = isWelcome50 || codeSent;

    const nameFields = (
        <div className={`grid grid-cols-2 ${isWelcome50 ? "gap-3" : "sm:grid-cols-2 gap-4"}`}>
            <div>
                <label className={labelClass}>{t("firstName")}</label>
                <input
                    type="text"
                    placeholder={placeholder("firstName")}
                    {...formik.getFieldProps("nickname")}
                    className={inputClass(formik.touched.nickname && formik.errors.nickname)}
                />
                {formik.touched.nickname && formik.errors.nickname && (
                    <p className="text-xs text-red-500 mt-1">{formik.errors.nickname}</p>
                )}
            </div>
            <div>
                <label className={labelClass}>{t("lastName")}</label>
                <input
                    type="text"
                    placeholder={placeholder("lastName")}
                    {...formik.getFieldProps("last_name")}
                    className={inputClass(formik.touched.last_name && formik.errors.last_name)}
                />
                {formik.touched.last_name && formik.errors.last_name && (
                    <p className="text-xs text-red-500 mt-1">{formik.errors.last_name}</p>
                )}
            </div>
        </div>
    );

    const phoneField = (
        <div>
            <label className={labelClass}>{t("phone")}</label>
            <div className={`${isWelcome50 ? "w-full" : "flex flex-col sm:flex-row gap-2"}`}>
                <PhoneInput
                    international={!isWelcome50}
                    countryCallingCodeEditable={false}
                    addInternationalOption={false}
                    defaultCountry={countryData?.country_code || countryData?.country || "AE"}
                    value={formik.values.phone}
                    onChange={(phone) => formik.setFieldValue("phone", phone)}
                    onCountryChange={(countryIso2) => {
                        if (!countryIso2) return;
                        const match = gtcCountries.find((c) => c.code === countryIso2);
                        if (match) {
                            formik.setFieldValue("country", match.name);
                            formik.setFieldValue("area", match.phone_code || "");
                        }
                    }}
                    placeholder={isWelcome50 ? placeholder("phone") : undefined}
                    countrySelectComponent={isWelcome50 ? Welcome50CountrySelect : undefined}
                    className={
                        isWelcome50
                            ? `PhoneInput welcome50-phone w-full ${formik.touched.phone && formik.errors.phone ? "phone-error" : ""}`
                            : `flex-1 border px-3 py-2 ${isMobile ? "bg-[#33335b]" : ""} rounded-md ${formik.touched.phone && formik.errors.phone
                                ? "border-red-500"
                                : "border-gray-300"
                            }`
                    }
                />
            </div>
            {formik.touched.phone && formik.errors.phone && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.phone}</p>
            )}
        </div>
    );

    const emailField = (
        <div>
            <label className={labelClass}>{t("email")}</label>
            <div className="relative">
                <input
                    type="email"
                    placeholder={placeholder("email")}
                    {...formik.getFieldProps("email")}
                    className={`${inputClass(formik.touched.email && formik.errors.email)} ${isWelcome50 ? "pr-[108px]" : ""}`}
                />
                <button
                    type="button"
                    onClick={sendVerificationCode}
                    disabled={otpLoading}
                    className={codeBtnClass}
                >
                    {otpLoading ? t("sending") : t("getCode")}
                </button>
            </div>
            {formik.touched.email && formik.errors.email && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.email}</p>
            )}
        </div>
    );

    const otpField = showOtpSection && (
        <div>
            <label className={labelClass}>{isWelcome50 ? t("verificationCode") : t("otp")}</label>
            <OtpInput
                value={formik.values.otp}
                onChange={(otp) => {
                    formik.setFieldValue("otp", otp);
                }}
                numInputs={6}
                containerStyle={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: isWelcome50 ? "8px" : "3px",
                }}
                isInputNum
                renderInput={(props) => (
                    <input
                        {...props}
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                    />
                )}
                inputStyle={
                    isWelcome50
                        ? {
                            width: "44px",
                            height: "44px",
                            fontSize: "16px",
                            borderRadius: "8px",
                            padding: 0,
                            textAlign: "center",
                            backgroundColor: "#fff",
                            color: "#111827",
                            fontWeight: "600",
                            outline: "none",
                            border:
                                formik.touched.otp && formik.errors.otp
                                    ? "1px solid #ef4444"
                                    : "1px solid #e2e8f0",
                        }
                        : {
                            fontSize: "16px",
                            borderRadius: "5px",
                            paddingBottom: "10px",
                            paddingTop: "10px",
                            width: "15%",
                            backgroundColor: "#fff",
                            color: "#666684",
                            fontWeight: "700",
                            outlineColor: "#666684",
                            border:
                                formik.touched.otp && formik.errors.otp
                                    ? "1px solid red"
                                    : "1px solid #666684",
                        }
                }
            />
            {formik.touched.otp && formik.errors.otp && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.otp}</p>
            )}
        </div>
    );

    const countryField = (
        <div>
            <label className={labelClass}>{t("country")}</label>
            <Select
                name="country"
                options={countryOptions}
                isDisabled={countryOptions.length === 0}
                placeholder={
                    countryOptions.length === 0
                        ? t("country")
                        : t("country")
                }
                styles={isWelcome50 ? welcome50SelectStyles : selectStyles}
                onChange={(opt) => {
                    formik.setFieldValue("country", opt?.value || "");
                    const match = gtcCountries.find((c) => c.name === opt?.value);
                    formik.setFieldValue("area", match?.phone_code || "");
                }}
                onBlur={() => formik.setFieldTouched("country", true)}
                value={countryOptions.find((opt) => opt.value === formik.values.country)}
            />
            {formik.touched.country && formik.errors.country && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.country}</p>
            )}
        </div>
    );

    const passwordField = (fieldKey, show, setShow) => (
        <div>
            <label className={labelClass}>{t(fieldKey)}</label>
            <div className="relative">
                <input
                    type={show ? "text" : "password"}
                    placeholder={placeholder(fieldKey === "password" ? "password" : "confirmPassword")}
                    {...formik.getFieldProps(fieldKey === "password" ? "password" : "confirmPassword")}
                    className={`${inputClass(formik.touched[fieldKey === "password" ? "password" : "confirmPassword"] && formik.errors[fieldKey === "password" ? "password" : "confirmPassword"])} pr-10`}
                />
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#64748b]"
                >
                    {show ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
            </div>
            {formik.touched[fieldKey === "password" ? "password" : "confirmPassword"] &&
                formik.errors[fieldKey === "password" ? "password" : "confirmPassword"] && (
                    <p className="text-xs text-red-500 mt-1">
                        {formik.errors[fieldKey === "password" ? "password" : "confirmPassword"]}
                    </p>
                )}
        </div>
    );

    return (
        <form
            onSubmit={formik.handleSubmit}
            className={isWelcome50 ? "w-full min-w-0 max-w-full space-y-4" : "space-y-4"}
        >
            {nameFields}

            {isWelcome50 ? (
                <>
                    {phoneField}
                    {emailField}
                    {otpField}
                    {countryField}
                    {passwordField("password", showPassword, setShowPassword)}
                    {passwordField("confirmPassword", showConfirmPassword, setShowConfirmPassword)}
                </>
            ) : (
                <>
                    {emailField}
                    {otpField}
                    {phoneField}
                    {countryField}
                    <div className="grid sm:grid-cols-1 gap-4">
                        {passwordField("password", showPassword, setShowPassword)}
                        {passwordField("confirmPassword", showConfirmPassword, setShowConfirmPassword)}
                    </div>
                </>
            )}

            {/* Invitation */}
            <div>
                <label className={labelClass}>{t("code")}</label>
                <input
                    disabled={!isWelcome50}
                    readOnly={isWelcome50 && partnerCodeReadOnly}
                    type="text"
                    placeholder={isWelcome50 ? placeholder("invitation") : undefined}
                    {...formik.getFieldProps("invitation")}
                    className={
                        isWelcome50
                            ? inputClass(false)
                            : `w-full border px-3 py-2 ${isMobile ? "bg-[#33335b]" : ""} rounded-md border-gray-300`
                    }
                />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2.5 pt-0.5">
                <input
                    type="checkbox"
                    id="terms"
                    {...formik.getFieldProps("terms")}
                    checked={formik.values.terms}
                    className={`${isWelcome50 ? "h-4 w-4 mt-0.5 shrink-0 accent-[#2563eb] rounded border-[#d1d5db]" : "h-5 w-5"}`}
                />
                <label htmlFor="terms" className={isWelcome50 ? "text-[12px] leading-[1.65] text-[#64748b]" : "text-xs"}>
                    {isWelcome50 ? (
                        <>
                            {t("termsPrefix")}{" "}
                            <a
                                className="text-[#2563eb] underline underline-offset-2"
                                href="https://www.gtcfx.com/terms-and-conditions"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("termsAndConditions")}
                            </a>
                            ,{" "}
                            <a
                                className="text-[#2563eb] underline underline-offset-2"
                                href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Lucky+Terms+And+Conditions.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("termsBonus")}
                            </a>{" "}
                            {locale === "ar" ? "و" : "and"}{" "}
                            <a
                                className="text-[#2563eb] underline underline-offset-2"
                                href="https://www.gtcfx.com/legal-policies-client-agreements"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("termsClient")}
                            </a>
                            .
                        </>
                    ) : (
                        <>
                            By submitting your application you confirm that you have read, understood and agreed to all the{" "}
                            <a className="text-secondary" href="https://www.gtcfx.com/terms-and-conditions" target="_blank">
                                Terms And Conditions
                            </a>
                            ,{" "}
                            <a
                                className="text-secondary"
                                href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Lucky+Terms+And+Conditions.pdf"
                                target="_blank"
                            >
                                Bonus Terms and Conditions
                            </a>{" "}
                            and{" "}
                            <a className="text-secondary" href="https://www.gtcfx.com/legal-policies-client-agreements" target="_blank">
                                Client Agreement .
                            </a>
                        </>
                    )}
                </label>
            </div>
            {formik.touched.terms && formik.errors.terms && (
                <p className="text-xs text-red-500">{formik.errors.terms}</p>
            )}

            {/* Submit */}
            <button
                type="submit"
                disabled={
                    loading ||
                    (!SKIP_SUBMIT_APIS &&
                        (!codeSent ||
                            formik.values.otp.length !== 6 ||
                            !formik.values.terms))
                }
                className={
                    isWelcome50
                        ? "w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white h-12 rounded-lg font-bold cursor-pointer text-[15px] disabled:opacity-50 transition-colors shadow-[0_4px_14px_rgba(37,99,235,0.35)] mt-1"
                        : `w-full ${isMobile ? "text-[#000032]" : "text-white"} py-3 rounded-xl font-medium cursor-pointer text-sm disabled:opacity-50`
                }
                style={isWelcome50 ? undefined : { background: isMobile ? "#fff" : "linear-gradient(135deg, #293794 0%, #000021 100%)" }}
            >
                {loading ? t("submitting") : t("btnText")}
            </button>
        </form>
    );
};

export default CommonMainForm;

import { useEffect } from "react";

const GoogleTranslate = () => {
    useEffect(() => {
        const scriptId = "google-translate-script";

        // Ensure Google Translate init function is available
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: "en" },
                "google_translate_element"
            );
        };

        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
        } else {
            // If script is already loaded, manually initialize the translator
            if (window.google && window.google.translate) {
                window.googleTranslateElementInit();
            }
        }

        // Function to detect language change
        const detectLanguageChange = () => {
            const selectElement = document.querySelector(".goog-te-combo");
            if (selectElement) {
                selectElement.addEventListener("change", (event) => {
                    console.log("Selected Language:", event.target.value);
                });
            }
        };

        // Function to detect Google Translate banner
        const detectBanner = () => {
            return !!document.querySelector(".goog-te-banner-frame");
        };

        // Use MutationObserver to detect dynamic changes
        const observer = new MutationObserver(() => {
            detectLanguageChange();
            if (detectBanner()) {
                console.log("Google Translate banner detected");
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div>
            <style>{`
                .goog-te-combo {
                    padding: 8px 12px;
                    border-radius: 4px;
                    border: 2px solid #091242;
                    background-color: #f8f9fa;
                    color: #091242;
                    font-size: 16px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .goog-te-combo:hover {
                    background-color: #091242;
                    color: white;
                    border-color: #091242;
                }
                .goog-te-banner-frame {
                    background-color: #091242 !important;
                    color: white !important;
                }
                .goog-te-menu-value span {
                    color: #091242 !important;
                    font-weight: bold;
                }
                .goog-te-menu2 {
                    background-color: #f8f9fa;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                .goog-te-menu2-item div {
                    padding: 8px 12px;
                    color: #333;
                    font-size: 14px;
                }
                .goog-te-menu2-item:hover {
                    background-color: #091242;
                    color: white !important;
                }
                .goog-logo-link {
                    display: none;
                }
            `}</style>
            <div id="google_translate_element"></div>
        </div>
    );
};

export default GoogleTranslate;

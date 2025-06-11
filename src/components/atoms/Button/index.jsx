<button
                            type="submit"
                            style={{
                                padding: "12px 30px",
                                fontSize: "1rem",
                                backgroundColor: submitting ? "#999" : "#4caf50",
                                color: "white",
                                border: "none",
                                cursor: submitting ? "not-allowed" : "pointer",
                                borderRadius: "4px",
                                transition: "background-color 0.3s",
                            }}
                            disabled={submitting}
                        >
                            {submitting ? "수정 중..." : "수정 완료"}
                        </button>
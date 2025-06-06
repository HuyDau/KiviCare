import { useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";

const useDataTable = ({
  tableRef,
  columns,
  data = [],
  url = null,
  actionCallback,
  isColumnHidden = false,
  isColumnHiddenClass = ".toggle-vis",
  isFilterColumn = false,
  isMultilang = false,
}) => {
  useEffect(() => {
    let datatable = tableRef;
    const initializeDataTable = () => {
      setTimeout(() => {
        let datatableObj = {
          dom: '<"row align-items-center gy-2"<"col-md-6" l><"col-md-6" f>><"table-responsive my-3" rt><"row align-items-center" <"col-md-6" i><"col-md-6" p>><"clear">',
          autoWidth: false,
          columns: columns,
          destroy: true,
        };
        if (url) {
          datatableObj = {
            ...datatableObj,
            processing: true,
            serverSide: true,
            ajax: {
              url: url,
            },
          };
        }

        if (data) {
          datatableObj = {
            ...datatableObj,
            data: data,
          };
        }

        if (isFilterColumn) {
          datatableObj = {
            ...datatableObj,
            initComplete: function () {
              const footerRow = document.createElement("tr");
              const table = $(tableRef.current).DataTable();
              columns.forEach((column) => {
                const footerCell = document.createElement("td");
                const input = document.createElement("input");
                input.type = "text";
                input.className = "form-control form-control-sm";
                input.placeholder = column.title;
                input.addEventListener("keyup", (event) => {
                  const columnIndex = columns.findIndex(
                    (c) => c.title === column.title
                  );
                  table.columns(columnIndex).search(event.target.value).draw();
                });
                footerCell.append(input);
                footerRow.append(footerCell);
              });

              $(tableRef.current).append($("<tfoot>").append(footerRow));
            },
          };
        }

        function languageSelect() {
          if (tableRef.current) {
            return Array.from(document.querySelector("#langSelector").options)
              .filter((option) => option.selected)
              .map((option) => option.getAttribute("data-path"));
          }
        }

        const setMultiLang = () => {
          datatableObj = {
            ...datatableObj,
            language: {
              url: languageSelect(),
            },
          };
        };
        if (isMultilang) {
          setMultiLang();
        }

        let datatable = $(tableRef.current).DataTable(datatableObj);
        
        if (typeof actionCallback === "function") {
          $(datatable.table().body()).on(
            "click",
            '[data-table="action"]',
            function () {
              actionCallback({
                id: $(this).data("id"),
                method: $(this).data("method"),
              });
            }
          );
        }

        if (isColumnHidden) {
          $(isColumnHiddenClass).on("click", function (e) {
            e.preventDefault();
            const column = datatable.column($(this).attr("data-column"));
            column.visible(!column.visible());
          });
        }

        if (isMultilang) {
          if (tableRef.current) {
            document
              .querySelector("#langSelector")
              .addEventListener("change", () => {
                $(tableRef.current).DataTable().destroy();
                setMultiLang();
                datatable = $(tableRef.current).DataTable(datatableObj);
              });
          }
        }
      }, 0);
    };

    // Cleanup function
    initializeDataTable();
    return () => {
      if ($.fn.DataTable.isDataTable(tableRef.current)) {
        datatable.destroy();
      }
      // initializeDataTable();
      $(tableRef.current).empty();
    };
  }, [
    actionCallback,
    columns,
    data,
    isColumnHidden,
    isColumnHiddenClass,
    isFilterColumn,
    isMultilang,
    tableRef,
    url,
  ]);
};

export default useDataTable;

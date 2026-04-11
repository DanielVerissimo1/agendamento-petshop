import { cancelSchedule } from "../services/cancel-schedule.js";
import { schedulesDay } from "./load-schedules.js";
import { exibirMensagemToast } from "../utils/toast.js";
const periods = document.querySelectorAll(".period-list");
periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        const isCancel = event.target.classList.contains("item-remove");

        if (isCancel) {
            const item = event.target.closest("li");

            const id = item.dataset.id;

            if (id) {
                exibirMensagemToast("Você tem certeza que deseja cancelar este agendamento?");
                await cancelSchedule({ id });
                schedulesDay();
            }
        }
    });
});

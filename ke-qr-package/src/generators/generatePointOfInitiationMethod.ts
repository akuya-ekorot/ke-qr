import assert from "node:assert";
import { PointOfInitiationMethod } from "../types";
import { formatDataObjectValue } from "../utils/formatDataObjectValues";

/**
 * Generates the point of initiation method data object
 *
 * @returns 010211 | 010212
 */
export function generatePointOfInitiationMethod(
  payload: PointOfInitiationMethod,
): string {
  assert(
    payload.id === "01",
    new Error("PointOfInitiationMethod id must be '01'."),
  );
  assert(
    payload.length === "02",
    new Error("PointOfInitiationMethod length must be '02'."),
  );
  assert(
    payload.value === "11" || payload.value === "12",
    new Error("PointOfInitiationMethod length must be '02'."),
  );

  return formatDataObjectValue(payload);
}

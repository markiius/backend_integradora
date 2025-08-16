/*
  Warnings:

  - You are about to drop the column `creation_date` on the `estimate` table. All the data in the column will be lost.
  - You are about to alter the column `quantity` on the `estimate` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(8,2)`.
  - Added the required column `send_date` to the `Estimate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `estimate` /*DROP COLUMN `creation_date`,*/
    /*ADD COLUMN `send_date` DATETIME(6) NOT NULL,*/
    MODIFY `quantity` DECIMAL(8, 2) NOT NULL,
    MODIFY `amount` DECIMAL(8, 2) NOT NULL,
    MODIFY `subtotal` DECIMAL(8, 2) NOT NULL,
    MODIFY `tax_amount` DECIMAL(8, 2) NOT NULL,
    MODIFY `total` DECIMAL(8, 2) NOT NULL;

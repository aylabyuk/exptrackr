import { Router } from 'express'
import { validate } from 'express-validation'

import RecordController from '../controllers/record'
import validator from '../validations'

const router = Router()

const recordController = new RecordController()

/**
 * @swagger
 * /api/record/expense:
 *  post:
 *    summary: Create an expense transaction record
 *    tags:
 *      - Records
 *    description: Create a new expense transaction, record will automatically saved as expense
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/definitions/Record'
 *    responses:
 *      201:
 *         description: Record successfully created
 *      500:
 *         description: Operation failed
 */
router.post(
  '/expense',
  validate(validator.createRecordValidator),
  recordController.CreateExpenseRecord,
)

/**
 * @swagger
 * /api/record/income:
 *  post:
 *    summary: Create an income transaction record
 *    tags:
 *      - Records
 *    description: Create a new income transaction, record will automatically saved as income
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/definitions/Record'
 *    responses:
 *      201:
 *         description: Record successfully created
 *      500:
 *         description: Operation failed
 */
router.post(
  '/income',
  validate(validator.createRecordvalidatorIncome),
  recordController.CreateIncomeRecord,
)

/**
 * @swagger
 * /api/record/recent:
 *  get:
 *    summary: Query the most recent transactions
 *    tags:
 *      - Records
 *    description: Query the most recent transactions
 *    responses:
 *      200:
 *        description: OK
 *      401:
 *        description: Unauthorized
 */
router.get('/recent', recordController.GetRecentTransactions)

/**
 * @swagger
 * /api/record:
 *  get:
 *    summary: Query transaction records created by user
 *    tags:
 *      - Records
 *    description: Get all record information of the user, or use a query param to filter records
 *    responses:
 *      200:
 *        description: OK
 *      401:
 *        description: Unauthorized
 */
router.get('/', recordController.GetFilteredRecords)

export { router as recordRouter }
